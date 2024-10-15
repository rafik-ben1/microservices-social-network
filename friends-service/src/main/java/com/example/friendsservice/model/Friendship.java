package com.example.friendsservice.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.ElementCollection;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Builder
public class Friendship {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ElementCollection
    private List<String> users;

    @CreationTimestamp
    private LocalDateTime createdAT;
}
