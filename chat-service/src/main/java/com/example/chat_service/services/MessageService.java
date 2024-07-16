package com.example.chat_service.services;

import com.example.chat_service.dto.MessageRequest;
import com.example.chat_service.mappers.MessageMapper;
import com.example.chat_service.models.Message;
import com.example.chat_service.repositories.ChatRepository;
import com.example.chat_service.repositories.MessageRepository;
import jakarta.ws.rs.NotFoundException;
import lombok.RequiredArgsConstructor;
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

       messagingTemplate.convertAndSend(String.format("/topic/chats/%s",chatId) , msg);
       chat.setLastMessage(request.content());
       chatRepository.save(chat);
        chat.getParticipants().forEach(participant ->{
            messagingTemplate.convertAndSend(String.format("/topic/users/%s",participant), chat);
        } );

    }



}
