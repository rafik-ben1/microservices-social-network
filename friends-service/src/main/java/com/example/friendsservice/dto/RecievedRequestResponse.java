package com.example.friendsservice.dto;

import com.example.friendsservice.HttpClient.user.UserRep;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class RecievedRequestResponse {
    private int id;

    private UserRep sentBy;

    private LocalDateTime sentAt;

}
