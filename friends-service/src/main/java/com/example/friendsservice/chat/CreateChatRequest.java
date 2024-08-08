package com.example.friendsservice.chat;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CreateChatRequest {
    private List<String> participant;
    private final Boolean isGroupChat = false;
}
