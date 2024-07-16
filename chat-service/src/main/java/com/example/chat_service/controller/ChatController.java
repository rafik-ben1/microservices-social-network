package com.example.chat_service.controller;

import com.example.chat_service.dto.ChatResponseDto;
import com.example.chat_service.dto.CreatChatDto;
import com.example.chat_service.services.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/chats")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService service;
    @PostMapping
    void createChat(@RequestBody CreatChatDto dto){
        service.createChat(dto);
    }
    @GetMapping
    Page<ChatResponseDto> getMyChats(Pageable pageable, @RequestHeader("user") String user ){
        return service.getMyChats(pageable,user);
    }

    @DeleteMapping("/{chatId}")
    void deleteChat(@PathVariable("chatId") String chatId, @RequestHeader("user") String user  ){

    }

}
