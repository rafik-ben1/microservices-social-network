package com.example.notification_service.events;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EventHandler {
    private final JavaMailSender mailSender;

    @KafkaListener(topics = "new-comment")
    public void newCommentHandler(NewCommentEvent event){
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom("facemok@info.com");
            messageHelper.setSubject("New comment");
            messageHelper.setTo(event.postAuthorEmail());
            messageHelper.setText(String.format("%s has commented %s on your post, go check it out",event.commentAuthorName(),event.commentContent()));
        };
        mailSender.send(messagePreparator);

    }

    @KafkaListener(topics = "friend-request-sent")
    public void friendRequestHandler(FriendRequestEvent event){
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom("facemok@info.com");
            messageHelper.setSubject("New friend request");
            messageHelper.setTo(event.recieverEmail());
            messageHelper.setText(String.format("%s has sent you a friend request", event.senderName()));

        };
        mailSender.send(messagePreparator);
    }
    @KafkaListener(topics = "friend-request-accepted")
    public void friendRequestAcceptedHandler(FriendRequestEvent event){
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom("facemok@info.com");
            messageHelper.setSubject("friend request accepted ");
            messageHelper.setTo(event.recieverEmail());
            messageHelper.setText(String.format("%s has accepted your friend request, now you can chat with him and see his posts", event.senderName()));

        };
        mailSender.send(messagePreparator);
    }

}
