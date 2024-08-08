package com.example.chat_service.exception;

import java.time.Instant;

public record ErrorResponse(
        Instant TimeStamp,
        org.springframework.http.HttpStatus Status,
        int StatusCode,
        String message

) {
}
