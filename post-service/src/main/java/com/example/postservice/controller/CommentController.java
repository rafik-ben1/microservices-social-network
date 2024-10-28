package com.example.postservice.controller;

import com.example.postservice.dto.request.CreateCommentDto;
import com.example.postservice.dto.response.CommentResponse;
import com.example.postservice.service.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/posts/{postId}/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @PostMapping
    CommentResponse createPost(@PathVariable("postId") int postId, @RequestBody @Valid CreateCommentDto dto,
            @RequestHeader("user") String userId) {
        return this.commentService.createComment(dto, userId, postId);
    }

    @GetMapping
    Page<CommentResponse> getPostComments(@PathVariable("postId") int postId, Pageable pageable) {
        return this.commentService.getPostComments(postId, pageable);
    }

    @DeleteMapping("/{commentId}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    void deleteComment(@PathVariable("commentId") int commentId, @RequestHeader("user") String user) {
        commentService.deleteComment(commentId, user);
    }

    @PatchMapping("/{commentId}")
    void updateComment(@PathVariable("commentId") int commentId, @RequestBody @Valid CreateCommentDto dto,
            @RequestHeader("user") String user) {

    }
}
