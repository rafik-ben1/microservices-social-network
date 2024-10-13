package com.example.friendsservice.dto.response;

import com.example.friendsservice.dto.RequestType;
import com.example.friendsservice.user.UserRep;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class RequestResponse {
    private int id;

    private UserRep user;

    private LocalDateTime sentAt;

    private RequestType type;

}
