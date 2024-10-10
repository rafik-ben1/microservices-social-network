package com.example.friendsservice.mapper;

import com.example.friendsservice.user.UserRep;
import com.example.friendsservice.dto.response.RecievedRequestResponse;
import com.example.friendsservice.dto.response.SentRequestResponse;
import com.example.friendsservice.model.Request;
import org.springframework.stereotype.Service;

@Service
public class RequestMapper {
    public RecievedRequestResponse mapToRecieved(Request request , UserRep user){
        return RecievedRequestResponse.builder()
                .id(request.getId())
                .sentBy(user)
                .sentAt(request.getSentAt())
                .build();
    }
    public SentRequestResponse mapToSent(Request request , UserRep user){
        return SentRequestResponse.builder()
                .id(request.getId())
                .sentAt(request.getSentAt())
                .sentTo(user)
                .build();
    }
}
