package com.example.chat_service.mappers;

import com.example.chat_service.dto.ChatResponseDto;
import com.example.chat_service.dto.CreatChatDto;
import com.example.chat_service.models.Chat;
import com.example.chat_service.user.UserRep;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ChatMapper {
    public Chat mapToEntity(CreatChatDto dto){
       var chat = Chat.builder()
                .isGroupChat(dto.isGroupChat())
                .build();
       chat.setParticipants(dto.participants());
       return chat;
    }
    public ChatResponseDto mapToResponse(Chat chat , List<UserRep> participants){
        UserRep other = participants.get(0);
        String chatName = chat.getIsGroupChat() ? chat.getChatName() : other.getFirstname() + " " +other.getLastname();
        return ChatResponseDto.builder()
                .id(chat.getId())
                .chatName(chatName)
                .participants(participants)
                .isGroupChat(chat.getIsGroupChat())
                .lastMessage(chat.getLastMessage())
                .build();
    }

}
