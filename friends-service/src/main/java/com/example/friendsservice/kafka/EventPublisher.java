package com.example.friendsservice.kafka;

import java.time.LocalDateTime;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.example.friendsservice.user.UserClient;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventPublisher {
    private final UserClient userClient;
    private final KafkaTemplate<String, FriendRequestEvent> kafkaTemplate;

      @Async
       public void sendFriendRequestEvent(String senderId,String recieverId, boolean isAccepted) {
        var reciever = userClient.findUserById(recieverId);
        var sender = userClient.findUserById(senderId);
        var event = new FriendRequestEvent(sender.getFirstname() + " " + sender.getLastname(),
                reciever.getEmail(),
                LocalDateTime.now()
        );
        var topic = isAccepted ? "accepted" : "sent";
        kafkaTemplate.send(String.format("friend-request-%s",topic),event);
    }
}
