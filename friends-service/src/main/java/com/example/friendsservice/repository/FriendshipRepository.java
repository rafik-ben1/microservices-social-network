package com.example.friendsservice.repository;

import com.example.friendsservice.model.Friendship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendshipRepository extends JpaRepository<Friendship, Integer> {
}
