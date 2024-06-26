package com.example.postservice.controller;

import com.example.postservice.dto.CreatePostDto;
import com.example.postservice.models.Post;
import com.example.postservice.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @PostMapping
    public Post createPost(@RequestHeader("user") String user , @RequestBody @Valid CreatePostDto dto){
        return postService.createPost(dto,user);
    }

    @GetMapping("/user/{userId}")
     public Page<Post> getUserPosts(@PathVariable("userId") String userId , Pageable pageable ){
       return postService.findUserPosts(userId,pageable);
    }
}
