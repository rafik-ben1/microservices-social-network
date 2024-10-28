package com.example.postservice.service;

import com.example.postservice.dto.request.CreatePostDto;
import com.example.postservice.dto.response.PostResponse;
import com.example.postservice.mapper.PostMapper;
import com.example.postservice.models.Post;
import com.example.postservice.repository.LikeRepository;
import com.example.postservice.repository.PostRepository;

import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.NotAuthorizedException;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper mapper;
    private final LikeRepository likeRepository;
    public void createPost(CreatePostDto dto, String userId, String image)
    {
        Post post = mapper.mapToPost(dto,userId);
        post.setImage(image);
        postRepository.save(post);
    }

    public Page<PostResponse> findUserPosts(String userId, Pageable pageable){
       Page<Post> posts = postRepository.findByAuthor(userId, pageable);
       return posts.map(post ->{
        int likes = likeRepository.countByPostId(post.getId());
        return mapper.mapToResponse(post, likes);
      });
    }

    public void deletePost(String user , int postId){
        var post = postRepository.findById(postId)
              .orElseThrow(()-> new NotFoundException("post not found"));
        if(!user.equals(post.getAuthor()) ){
            throw new NotAuthorizedException("you are not allowed to perfurme this action");
        }
        postRepository.deleteById(postId);
    }


    public void updatePost(CreatePostDto dto, String userId, String image, int postId){
        var post = postRepository.findById(postId)
              .orElseThrow(()-> new NotFoundException("post not found"));

              if(!userId.equals(post.getAuthor()) ){
                throw new NotAuthorizedException("you are not allowed to perfurme this action");
            }
        post.setContent(dto.getContent());
        post.setImage(image);
        postRepository.save(post);
    }

}
