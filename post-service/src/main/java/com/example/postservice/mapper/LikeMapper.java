package com.example.postservice.mapper;

import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.response.LikeResponse;
import com.example.postservice.models.Likes;
import org.springframework.stereotype.Component;

@Component
public class LikeMapper {
    public LikeResponse mapToLikeResponse(Likes like, UserRep user){
      return new LikeResponse(like.getId(), user);
    }
}
