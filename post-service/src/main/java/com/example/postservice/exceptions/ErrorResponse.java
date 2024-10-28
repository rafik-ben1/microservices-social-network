package com.example.postservice.exceptions;

import java.time.LocalDateTime;

public record ErrorResponse(
    String error,
    String message,
    LocalDateTime timestamp
) {
    
}


