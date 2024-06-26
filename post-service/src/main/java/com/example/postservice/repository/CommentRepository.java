package com.example.postservice.repository;

import com.example.postservice.models.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository <Comment, Integer> {
    Page<Comment> findByPostId(int postId , Pageable pageable);

}
