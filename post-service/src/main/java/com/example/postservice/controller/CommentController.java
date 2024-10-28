package com.example.postservice.controller;

import com.example.postservice.dto.request.CreateCommentDto;
import com.example.postservice.dto.response.CommentResponse;
import com.example.postservice.service.CommentService;
import jakarta.validation.Valid;
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
    CommentResponse createPost(@PathVariable("postId") int postId, @RequestBody @Valid CreateCommentDto dto , @RequestHeader("user") String userId){
        return this.commentService.createComment(dto, userId, postId);
    }
    @GetMapping
    Page<CommentResponse> getPostComments(@PathVariable("postId") int postId , Pageable pageable){
        return this.commentService.getPostComments(postId,pageable);
    }
}
