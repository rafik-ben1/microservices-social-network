package com.example.postservice.mapper;

import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.request.CreateCommentDto;
import com.example.postservice.dto.response.CommentResponse;
import com.example.postservice.models.Comment;
import com.example.postservice.models.Post;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {
    public Comment mapFromCreateToEntity(CreateCommentDto dto, String author, Post post) {
        return Comment.builder()
                .content(dto.getContent())
                .author(author)
                .post(post)
                .build();
    }

    public CommentResponse mapFromEntityToResponse(Comment comment, UserRep author) {
        return new CommentResponse(comment.getId(),
                comment.getContent(),
                comment.getCreatedAt(),
                comment.getUpdatedAt(),
                author);
    }
}
