package com.example.postservice.models;

import com.example.postservice.HttpClient.user.UserRep;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "post_seq")
    @SequenceGenerator(name = "post_seq",allocationSize = 1)
    private Integer id;

    private String content;

    private String author;

    private int likedBy;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
