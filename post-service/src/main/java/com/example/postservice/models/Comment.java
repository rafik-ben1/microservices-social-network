package com.example.postservice.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "comment_seq")
    @SequenceGenerator(name = "comment_seq",allocationSize = 1)
    private Integer id;

    private String content;

    private String author;

    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
