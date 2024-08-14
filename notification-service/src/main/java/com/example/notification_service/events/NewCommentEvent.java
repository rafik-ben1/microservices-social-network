package com.example.notification_service.events;

import java.time.LocalDateTime;

public record NewCommentEvent(
        String commentAuthorName,
        String postAuthorEmail,
        String commentContent,
        LocalDateTime time
) {
}
