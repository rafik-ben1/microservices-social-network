package com.example.postservice.exceptions;

import java.time.Instant;

public record ErrorResponse(
        Instant TimeStamp,
        org.springframework.http.HttpStatus Status,
        int StatusCode,
        String message

) {
}

