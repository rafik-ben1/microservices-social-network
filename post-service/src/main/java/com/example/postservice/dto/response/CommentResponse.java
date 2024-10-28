package com.example.postservice.dto.response;

import com.example.postservice.HttpClient.user.UserRep;
import java.time.LocalDateTime;

public record CommentResponse(
        int id,

        String content,

        LocalDateTime createdAt,

        LocalDateTime updatedAt,

        UserRep author
) {}
