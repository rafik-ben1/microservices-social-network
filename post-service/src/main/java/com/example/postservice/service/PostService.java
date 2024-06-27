package com.example.postservice.service;

import com.example.postservice.HttpClient.user.UserClient;
import com.example.postservice.dto.CreatePostDto;
import com.example.postservice.mapper.PostMapper;
import com.example.postservice.models.Post;
import com.example.postservice.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserClient userClient;
    private final PostMapper mapper;
    public Post createPost(CreatePostDto dto, String userId, String image)
    {
        Post post = mapper.mapToPost(dto,userId);
        post.setImage(image);
        return postRepository.save(post);
    }

    public Page<Post> findUserPosts(String userId, Pageable pageable){
       return postRepository.findByAuthor(userId, pageable);
    }

}
