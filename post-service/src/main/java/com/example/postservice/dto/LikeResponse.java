package com.example.postservice.dto;

import com.example.postservice.HttpClient.user.UserRep;
import lombok.Builder;

@Builder
public class LikeResponse {
    private int id;

    private UserRep author;

}
