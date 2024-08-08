package com.example.chat_service.services;

import com.example.chat_service.dto.ChatResponseDto;
import com.example.chat_service.dto.CreatChatDto;
import com.example.chat_service.mappers.ChatMapper;
import com.example.chat_service.models.Chat;
import com.example.chat_service.models.Message;
import com.example.chat_service.models.MessageType;
import com.example.chat_service.repositories.ChatRepository;
import com.example.chat_service.repositories.MessageRepository;
import com.example.chat_service.user.UserClient;
import com.example.chat_service.user.UserRep;
import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.ForbiddenException;
import jakarta.ws.rs.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository repository;
    private final ChatMapper mapper;
    private final UserClient client;
    private final MessageRepository messageRepository;
    private final SimpMessagingTemplate template;

    public void createChat(CreatChatDto dto){
        Chat chat = repository.save(mapper.mapToEntity(dto));
        Message msg = Message.builder()
                .sentAt(LocalDateTime.now())
                .content("You are friends now ! say hello to each other")
                .type(MessageType.SYSTEM)
                .chatId(chat.getId())
                .build();
        var savedMsg = messageRepository.save(msg);
        chat.setLastMessage(savedMsg);
       var savedChat = repository.save(chat);

        dto.getParticipant().forEach(participant -> {
            template.convertAndSend(String.format("/topic/users/%s",participant), savedChat);
                });
    }



    public Page<ChatResponseDto> getMyChats(Pageable pageable, String userId){
     return repository.findByParticipantsContainingOrderByLastSent(userId,pageable).map(chat -> {
         List<UserRep> participants = new ArrayList<>();
         chat.getParticipants().forEach(participant ->{
             if(!participant.equals(userId)){
             participants.add(client.findUserById(participant));}
         });
         return mapper.mapToResponse(chat,participants);
     });
    }


    public void deleteChat(String chatId , String userId){
       Chat chat =  repository.findById(chatId)
               .orElseThrow(()-> new NotFoundException("chat not found"));

       if (!chat.getParticipants().contains(userId)){
           throw new ForbiddenException("You are not allowed to perform this action");
       }
       repository.deleteById(chatId);
       messageRepository.deleteByChatId(chatId);
    }

    public void addUserToGroup(String chatId , String userId , String addedUser){
        Chat chat = repository.findById(chatId)
                .orElseThrow(()-> new NotFoundException("chat was not found") );
        if (!chat.getIsGroupChat())
            throw new ForbiddenException("you are not allowed to perfurme this action");
        if (!chat.getParticipants().contains(userId))
            throw new ForbiddenException("You are not allowed to perfurme this action" );

        if (chat.getParticipants().contains(addedUser))
            throw new BadRequestException("User is already in the group chat");

       chat.getParticipants().add(addedUser);
       Message msg = Message.builder()
               .chatId(chat.getId())
               .type(MessageType.SYSTEM)
               .content("new user has been added to group chat")
               .sentAt(LocalDateTime.now())
               .build();
       messageRepository.save(msg);
       chat.setLastMessage(msg);
       repository.save(chat);
       chat.getParticipants().forEach(p ->{
           template.convertAndSend("/topic/"+p, chat);
       });
       template.convertAndSend("/topic/chats/"+chatId , msg);

    }

}
