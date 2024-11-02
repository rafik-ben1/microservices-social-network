package com.example.postservice.mapper;

import com.example.postservice.dto.request.CreatePostDto;
import com.example.postservice.dto.response.PostResponse;
import com.example.postservice.models.Post;
import org.springframework.stereotype.Component;

@Component
public class PostMapper {

    public Post mapToPost(CreatePostDto dto, String author) {
        return Post.builder()
                .content(dto.getContent())
                .author(author)
                .build();
    }

    public PostResponse mapToResponse(Post post, int likedBy,boolean isLiked) {
        return new PostResponse(post.getId(),
                post.getContent(), post.getImage(),
                post.getAuthor(),
                likedBy,
                isLiked,
                post.getCreatedAt(),
                post.getUpdatedAt());
    }
}
