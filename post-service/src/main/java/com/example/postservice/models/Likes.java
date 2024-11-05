package com.example.postservice.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "like_seq")
    @SequenceGenerator(name = "like_seq",allocationSize = 1)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.REFRESH)
    private Post post;

    private String author;
}
