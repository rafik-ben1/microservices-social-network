package com.example.postservice.service;
import com.example.postservice.HttpClient.user.UserClient;
import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.dto.LikeResponse;
import com.example.postservice.mapper.LikeMapper;
import com.example.postservice.models.Likes;
import com.example.postservice.models.Post;
import com.example.postservice.repository.LikeRepository;
import com.example.postservice.repository.PostRepository;
import jakarta.ws.rs.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LikeService {
    private final LikeRepository likeRepository;
    private final PostRepository postRepository;
    private final UserClient userClient;
    private final LikeMapper mapper;
    public void likePost(int postId , String userId){
        Post post = postRepository.findById(postId).orElseThrow(()-> new NotFoundException("post not found"));
        Optional<Likes> possiblyLiked = likeRepository.findByAuthorAndPostId(userId,postId);
        if(possiblyLiked.isEmpty()){
            Likes like = Likes.builder()
                    .author(userId)
                    .postId(postId)
                    .build();
            likeRepository.save(like);
            post.setLikedBy(post.getLikedBy() + 1);
            return;
        }
        likeRepository.deleteById(possiblyLiked.get().getId());
        post.setLikedBy(post.getLikedBy() - 1);
        return;
    }

    public Page<LikeResponse> getPostLikes(int postId, Pageable pageable){
            return  likeRepository.findByPostId(postId, pageable).map(like ->{
            UserRep user = userClient.findUserById(like.getAuthor());
            if (user == null )
                return null;
            return mapper.mapToLikeResponse(like,user);
        });

    }

}
