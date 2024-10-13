package com.example.friendsservice.mapper;

import com.example.friendsservice.user.UserRep;
import com.example.friendsservice.dto.RequestType;
import com.example.friendsservice.dto.response.RequestResponse;
import com.example.friendsservice.model.Request;
import org.springframework.stereotype.Service;

@Service
public class RequestMapper {
    public RequestResponse mapToResponse(Request request , UserRep user, RequestType type ){
        return  RequestResponse.builder()
                .id(request.getId())
                .user(user)
                .sentAt(request.getSentAt())
                .type(type)
                .build();
    }
 
}
