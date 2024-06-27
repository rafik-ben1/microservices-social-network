package com.example.postservice.controller;

import com.example.postservice.controller.service.StorageService;
import com.example.postservice.dto.CreatePostDto;
import com.example.postservice.models.Post;
import com.example.postservice.service.PostService;
import com.example.postservice.service.StorageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
    private final StorageService storageService;

    @PostMapping(consumes = "multipart/form-data")
    public Post createPost(@RequestHeader("user") String user , @ModelAttribute @Valid CreatePostDto dto, @RequestParam("image") MultipartFile image ){
        String imagePath = storageService.save(user, image);
        return postService.createPost(dto,user,imagePath);
    }

    @GetMapping("/user/{userId}")
     public Page<Post> getUserPosts(@PathVariable("userId") String userId , Pageable pageable ){
       return postService.findUserPosts(userId,pageable);
    }
}
