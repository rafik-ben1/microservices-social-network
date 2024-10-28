package com.example.postservice.kafka;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import com.example.postservice.HttpClient.user.UserClient;
import com.example.postservice.HttpClient.user.UserRep;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class EventPublisher {
    private final KafkaTemplate<String, NewCommentEvent> kafkaTemplate;
    private final UserClient userCLient;

    
    @Async
    public void sendNewCommentEvent(String commentAuthorName, String postAuthorId, String commentContent) {
        UserRep postAuthor = userCLient.findUserById(postAuthorId);
        var event = new NewCommentEvent(commentAuthorName,
                postAuthor.getEmail(),
                commentContent,
                LocalDateTime.now());
        kafkaTemplate.send("new-comment", event);
    }
}
