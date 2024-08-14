package com.example.postservice.service;

import com.example.postservice.HttpClient.user.UserClient;
import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.dto.CreateCommentDto;
import com.example.postservice.kafka.NewCommentEvent;
import com.example.postservice.mapper.CommentMapper;
import com.example.postservice.models.Comment;
import com.example.postservice.models.Post;
import com.example.postservice.repository.CommentRepository;
import com.example.postservice.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final CommentMapper mapper;
    private final UserClient userCLient;
    private final PostRepository postRepository;
    private final KafkaTemplate<String, NewCommentEvent> kafkaTemplate;
    public CommentResponseDto createComment(CreateCommentDto dto , String authorId , int postId){
        UserRep user = userCLient.findUserById(authorId);
        Comment commentToSave = mapper.mapFromCreateToEntity(dto,authorId , postId);
        Comment SavedComment = commentRepository.save(commentToSave);
        Post post = postRepository.findById(postId).get();
        String commentAuthorUsername = user.getFirstname() + " " + user.getLastname();
        sendNewCommentEvent(commentAuthorUsername,post.getAuthor(),SavedComment.getContent());
        return mapper.mapFromEntityToResponse(SavedComment, user);
    }

    @Async
    public void sendNewCommentEvent(String commentAuthorName,String postAuthorId, String commentContent){
        UserRep postAuthor = userCLient.findUserById(postAuthorId);
        var event = new NewCommentEvent(commentAuthorName,
                                        postAuthor.getEmail(),
                                         commentContent,
                                          LocalDateTime.now());
        kafkaTemplate.send("new-comment",event);
    }
    public Page<CommentResponseDto> getPostComments(int postId, Pageable pageable){
        Page<Comment> commentList =  this.commentRepository.findByPostId(postId,pageable);

        return  commentList.map(comment -> {
            UserRep author = this.userCLient.findUserById(comment.getAuthor());
            return this.mapper.mapFromEntityToResponse(comment,author);
        });
    }
}
