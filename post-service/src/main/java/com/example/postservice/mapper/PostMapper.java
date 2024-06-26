package com.example.postservice.mapper;

import com.example.postservice.dto.CreatePostDto;
import com.example.postservice.models.Post;
import org.springframework.stereotype.Service;

@Service
public class PostMapper {
    public Post mapToPost(CreatePostDto dto,String author){
        return Post.builder()
                .content(dto.getContent())
                .author(author)
                .build();
    }
}
