package com.example.chat_service.dto;

public record MessageRequest(
        String content,
        String sentBy
) {
}
