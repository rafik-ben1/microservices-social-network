package com.example.chat_service.mappers;

import com.example.chat_service.dto.MessageRequest;
import com.example.chat_service.models.Message;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MessageMapper {

    public Message mapToEntity (MessageRequest request, String chatId){
        return Message.builder()
                .sentBy(request.getSentBy())
                .chatId(chatId)
                .content(request.getContent())
                .sentAt(LocalDateTime.now())
                .type(request.getType())
                .build();
    }

}
