package com.example.userservice.exception;

import java.time.LocalDateTime;
public record ErrorResponse(
    String error,
    String message,
    LocalDateTime timestamp
) {
    
}
