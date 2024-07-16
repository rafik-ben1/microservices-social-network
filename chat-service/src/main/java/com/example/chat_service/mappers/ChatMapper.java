package com.example.chat_service.mappers;

import com.example.chat_service.dto.ChatResponseDto;
import com.example.chat_service.dto.CreatChatDto;
import com.example.chat_service.models.Chat;
import com.example.chat_service.models.Message;
import com.example.chat_service.user.UserRep;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ChatMapper {
    public Chat mapToEntity(CreatChatDto dto){
        return Chat.builder()
                .participants(dto.getParticipant())
                .lastSent(LocalDateTime.now())
                .build();
    }
    public ChatResponseDto mapToResponse(Chat chat , List<UserRep> participants){
        return ChatResponseDto.builder()
                .id(chat.getId())
                .chatName(participants.getFirst().getFirstname() + " " + participants.getFirst().getLastname())
                .lastMessage(chat.getLastMessage())
                .build();
    }

}
