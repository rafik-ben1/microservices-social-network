package com.example.postservice.repository;

import com.example.postservice.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostRepository extends JpaRepository<Post, Integer> {
    Page<Post> findByAuthor(String author ,Pageable pageable);
}
