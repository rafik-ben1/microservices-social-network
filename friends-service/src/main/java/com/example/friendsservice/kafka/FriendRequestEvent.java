package com.example.friendsservice.kafka;

import java.time.LocalDateTime;

public record FriendRequestEvent(
        String senderName,
        String recieverEmail,
        LocalDateTime at
) {
}
