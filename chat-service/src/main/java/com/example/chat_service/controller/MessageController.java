package com.example.chat_service.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @MessageMapping("/broadcast")
    @SendTo("/topic/public")
    public String broadcast(@Payload String  message){
        return "your message was " + message;
    }

    @GetMapping
    String hello(){return "hello";}
}
