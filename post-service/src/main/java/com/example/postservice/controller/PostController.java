package com.example.postservice.controller;

import com.example.postservice.dto.request.CreatePostDto;
import com.example.postservice.dto.response.PostResponse;
import com.example.postservice.service.PostService;
import com.example.postservice.service.StorageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
    private final StorageService storageService;

    @PostMapping(consumes = "multipart/form-data")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createPost(@RequestHeader("user") String user, @ModelAttribute @Valid CreatePostDto dto,
            @Nullable @RequestParam("image") MultipartFile image) {
        String imagePath = (image != null) ? storageService.save(user, image) : null;
        postService.createPost(dto, user, imagePath);
    }

    @GetMapping("/{userId}")
    public Page<PostResponse> getUserPosts(@PathVariable("userId") String userId, Pageable pageable,
            @RequestHeader("user") String user) {
        return postService.findUserPosts(userId, pageable,user);
    }

    @DeleteMapping("/{postId}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deletePost(@RequestHeader("user") String user, @PathVariable("postId") int postId) {
        postService.deletePost(user, postId);
    }

    @PatchMapping(consumes = "multipart/form-data", path = "/{postId}")
    public void updatePost(@RequestHeader("user") String user, @ModelAttribute @Valid CreatePostDto dto,
            @Nullable @RequestParam("image") MultipartFile image,
            @PathVariable("postId") int postId) {
        String imagePath = (image != null) ? storageService.save(user, image) : null;
        postService.updatePost(dto, user, imagePath, postId);
    }
}
