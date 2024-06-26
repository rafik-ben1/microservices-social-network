package com.example.postservice.dto;

import com.example.postservice.HttpClient.user.UserRep;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class CommentResponseDto {
    private Integer id;

    private int postId;

    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private UserRep author;

}
