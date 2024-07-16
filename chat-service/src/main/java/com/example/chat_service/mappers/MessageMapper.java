package com.example.chat_service.mappers;

import com.example.chat_service.dto.MessageRequest;
import com.example.chat_service.models.Message;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MessageMapper {

    public Message mapToEntity (MessageRequest request, String chatId){
        return Message.builder()
                .sentBy(request.sentBy())
                .chatId(chatId)
                .content(request.content())
                .sentAt(LocalDateTime.now())
                .build();
    }

}
