package com.example.postservice.kafka;

import java.time.LocalDateTime;

public record NewCommentEvent(
        String commentAuthorName,
        String postAuthorEmail,
        String commentContent,
        LocalDateTime time
) {
}
