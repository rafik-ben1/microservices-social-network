package com.example.postservice.controller;

import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.dto.CreateCommentDto;
import com.example.postservice.models.Comment;
import com.example.postservice.models.Post;
import com.example.postservice.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/posts/{postId}/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @PostMapping
    CommentResponseDto createPost(@PathVariable("postId") int postId, @RequestBody CreateCommentDto dto , @RequestHeader("user") String userId){
        return this.commentService.createComment(dto, userId, postId);
    }
    @GetMapping
    Page<CommentResponseDto> getPostComments(@PathVariable("postId") int postId , Pageable pageable){
        return this.commentService.getPostComments(postId,pageable);
    }
}
