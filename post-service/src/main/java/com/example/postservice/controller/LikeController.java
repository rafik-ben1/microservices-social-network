package com.example.postservice.controller;

import com.example.postservice.dto.LikeResponse;
import com.example.postservice.service.LikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/posts/{postId}/likes")
@RequiredArgsConstructor
public class LikeController {
    private final LikeService likeService;
    @PostMapping
    ResponseEntity<?> likePost(@PathVariable("postId") int postId, @RequestHeader("user") String userId ){
        likeService.likePost(postId, userId);
        return ResponseEntity.accepted().build();
    }

    Page<LikeResponse> getPostLikes(@PathVariable("postId") int postId, Pageable pageable){
        return likeService.getPostLikes(postId,pageable);
    }

}
