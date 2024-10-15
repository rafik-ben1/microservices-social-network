package com.example.friendsservice.repository;
import com.example.friendsservice.model.Friendship;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FriendshipRepository extends JpaRepository<Friendship, Integer> {

    Page<Friendship> findByUsersContaining(String user, Pageable pageable);

    Optional<Friendship> findByUsersIn(List<String> users);

    @Transactional
    @Modifying
    @Query("DELETE FROM Friendship f WHERE :user1 member of f.users AND :user2 member of f.users")
    void deleteByUsers(@Param("user1") String user1, @Param("user2") String user2);
}
 