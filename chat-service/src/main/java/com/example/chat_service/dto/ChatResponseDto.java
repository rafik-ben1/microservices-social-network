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
    private String lastMessage;
    private String chatName;
    private List<UserRep> participants;
}
