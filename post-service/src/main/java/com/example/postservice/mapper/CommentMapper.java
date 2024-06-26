package com.example.postservice.mapper;

import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.dto.CreateCommentDto;
import com.example.postservice.models.Comment;
import org.springframework.stereotype.Service;

@Service
public class CommentMapper {
    public Comment mapFromCreateToEntity(CreateCommentDto dto, String author, int postId ){
        return Comment.builder()
                .content(dto.getContent())
                .author(author)
                .postId(postId)
                .build();
    }

    public CommentResponseDto mapFromEntityToResponse(Comment comment, UserRep author){
        return CommentResponseDto.builder()
                .author(author)
                .content(comment.getContent())
                .id(comment.getId())
                .postId(comment.getPostId())
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
    }
}
