package com.example.postservice.dto.response;

import com.example.postservice.HttpClient.user.UserRep;


public record LikeResponse (
     int id,
     UserRep author
){}
