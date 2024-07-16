package com.example.chat_service.controller;

import com.example.chat_service.dto.MessageRequest;
import com.example.chat_service.services.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;
    @MessageMapping("/{chatId}/messages")
    public void send(@Payload MessageRequest message , @DestinationVariable String chatId){
        messageService.saveAndSend(message , chatId);
    }

    @MessageMapping("/{chatId}/messages.seen")
    public void registerSeen(@Payload String userId, @DestinationVariable String chatId){

    }

}
