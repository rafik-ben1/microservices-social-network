package com.example.chat_service.controller;

import com.example.chat_service.dto.MessageRequest;
import com.example.chat_service.models.Message;
import com.example.chat_service.services.MessageService;
import com.example.chat_service.services.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/chats/{chatId}/messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;
    private final StorageService storageService;

     @PostMapping(consumes = "multipart/form-data")
    public void send(@ModelAttribute MessageRequest message, @RequestParam("image") MultipartFile image, @PathVariable("chatId") String chatId){
        if (!image.isEmpty()){
           var imagePath = storageService.save(message.getSentBy(),image);
           message.setContent(imagePath);
        }
         messageService.saveAndSend(message , chatId);
    }

    @PostMapping("/seen")
    public void registerSeen(@Payload String messageId, @RequestHeader("user") String user , @PathVariable("chatId") String chatId ){
         messageService.setSeen(chatId,user);
    }

    @GetMapping
    public Page<Message> getChatMessages(Pageable pageable, @PathVariable("chatId") String chatId ){
        return messageService.getChatMessages(pageable, chatId);
    }

}
