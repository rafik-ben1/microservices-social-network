package com.example.chat_service.dto;

import com.example.chat_service.models.Message;
import com.example.chat_service.user.UserRep;
import lombok.Builder;
import lombok.Data;


import java.util.List;

@Builder
@Data
public class ChatResponseDto {
    private String id;
    private Message lastMessage;
    private String chatName;
    private Boolean isGroupChat;
    private List<UserRep> participants;
}
