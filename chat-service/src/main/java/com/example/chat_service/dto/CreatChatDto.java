package com.example.chat_service.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CreatChatDto {
    private List<String> participant;
}
