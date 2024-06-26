package com.example.postservice.service;

import com.example.postservice.HttpClient.user.UserClient;
import com.example.postservice.HttpClient.user.UserRep;
import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.dto.CreateCommentDto;
import com.example.postservice.mapper.CommentMapper;
import com.example.postservice.models.Comment;
import com.example.postservice.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final CommentMapper mapper;
    private final UserClient userCLient;

    public CommentResponseDto createComment(CreateCommentDto dto , String authorId , int postId){
        UserRep user = userCLient.findUserById(authorId);
        Comment commentToSave = mapper.mapFromCreateToEntity(dto,authorId , postId);
        Comment SavedComment = commentRepository.save(commentToSave);

        return mapper.mapFromEntityToResponse(SavedComment, user);
    }
    public Page<CommentResponseDto> getPostComments(int postId, Pageable pageable){
        Page<Comment> commentList =  this.commentRepository.findByPostId(postId,pageable);

        return  commentList.map(comment -> {
            UserRep author = this.userCLient.findUserById(comment.getAuthor());
            return this.mapper.mapFromEntityToResponse(comment,author);
        });
    }
}
