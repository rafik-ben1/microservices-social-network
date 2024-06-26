package com.example.postservice.mapper;

import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.LikeResponse;
import com.example.postservice.models.Likes;
import org.springframework.stereotype.Service;

@Service
public class LikeMapper {
    public LikeResponse mapToLikeResponse(Likes like, UserRep user){
        return LikeResponse.builder()
                           .id(like.getId())
                           .author(user)
                           .build();
    }
}
