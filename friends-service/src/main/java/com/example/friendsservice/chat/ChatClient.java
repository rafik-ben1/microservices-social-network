package com.example.friendsservice.chat;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(url = "http://localhost:8060/api/v1/chats", name = "chat-client")
public interface ChatClient {
    @PostMapping
    public void createChat(@RequestBody CreateChatRequest chatRequest);
}
