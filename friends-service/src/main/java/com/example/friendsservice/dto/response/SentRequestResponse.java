package com.example.friendsservice.dto.response;
import com.example.friendsservice.user.UserRep;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class SentRequestResponse {
    private int id;

    private UserRep sentTo;

    private LocalDateTime sentAt;
}
