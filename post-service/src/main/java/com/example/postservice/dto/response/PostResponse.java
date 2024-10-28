package com.example.postservice.dto.response;

import java.time.LocalDateTime;

public record PostResponse(

        Integer id,

        String content,

        String image,

        String author,

        int likedBy,

        LocalDateTime createdAt,

        LocalDateTime updatedAt) {
}
