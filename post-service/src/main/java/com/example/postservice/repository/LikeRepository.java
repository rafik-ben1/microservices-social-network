package com.example.postservice.repository;

import com.example.postservice.dto.CommentResponseDto;
import com.example.postservice.models.Comment;
import com.example.postservice.models.Likes;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikeRepository extends JpaRepository<Likes,Integer>  {
    Page<Likes> findByPostId(int postId , Pageable pageable);

     Optional<Likes> findByAuthorAndPostId(String author, int postId);
}
