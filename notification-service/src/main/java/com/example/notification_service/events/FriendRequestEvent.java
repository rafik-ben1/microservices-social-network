package com.example.notification_service.events;

import java.time.LocalDateTime;

public record FriendRequestEvent(
        String senderName,
        String recieverEmail,
        LocalDateTime at
) {
}
