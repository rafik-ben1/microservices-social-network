package com.example.postservice.mapper;

import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.dto.CreateCommentDto;
import com.example.postservice.models.Comment;
import com.example.postservice.models.Post;
import org.springframework.stereotype.Service;

@Service
public class CommentMapper {
    public Comment mapFromCreateToEntity(CreateCommentDto dto, String author, Post post ){
        return Comment.builder()
                .content(dto.getContent())
                .author(author)
                .post(post)
                .build();
    }

    public CommentResponseDto mapFromEntityToResponse(Comment comment, UserRep author){
        return CommentResponseDto.builder()
                .author(author)
                .content(comment.getContent())
                .id(comment.getId())
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
    }
}
