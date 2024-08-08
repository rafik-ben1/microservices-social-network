package com.example.chat_service.services;
import com.example.chat_service.dto.MessageRequest;
import com.example.chat_service.mappers.MessageMapper;
import com.example.chat_service.models.Chat;
import com.example.chat_service.models.Message;
import com.example.chat_service.repositories.ChatRepository;
import com.example.chat_service.repositories.MessageRepository;
import jakarta.ws.rs.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final SimpMessagingTemplate messagingTemplate;
    private final MessageMapper mapper;
    private final ChatRepository chatRepository;

    public void saveAndSend(MessageRequest request , String chatId){
        Message msg = messageRepository.save(mapper.mapToEntity(request,chatId));
        var chat = chatRepository.findById(chatId)
                .orElseThrow(()-> new NotFoundException("chat was not found"));
       chat.setLastMessage(msg);
       messagingTemplate.convertAndSend(String.format("/topic/chats/%s",chatId) , msg);
       chatRepository.save(chat);
        sendToParticipants(chat);

    }

    private void sendToParticipants(Chat chat) {
        chat.getParticipants().forEach(participant ->{
            messagingTemplate.convertAndSend(String.format("/topic/users/%s",participant), chat);
        } );
    }


    public void setSeen(String chatId,String user){
        var messages = messageRepository.findAllByChatIdAndSeenByNotContaining(chatId,user);
        messages.forEach(message -> {
            message.getSeenBy().add(user);
        });
        messageRepository.saveAll(messages);
        Chat chat = chatRepository.findById(chatId).get();
        Message msg = messageRepository.findByChatIdOrderBySentAtDesc(chatId).get(0);
        messagingTemplate.convertAndSend(String.format("/topic/chats/%s",chatId) , msg);
        chat.setLastMessage(msg);
        chatRepository.save(chat);
        sendToParticipants(chat);

    }

    public Page<Message> getChatMessages(Pageable pageable, String chatId) {
        return messageRepository.findByChatIdOrderBySentAtDesc(chatId, pageable);
    }
}
