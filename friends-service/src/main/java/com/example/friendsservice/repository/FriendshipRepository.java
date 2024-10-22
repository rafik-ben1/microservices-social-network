package com.example.friendsservice.repository;
import com.example.friendsservice.model.Friendship;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FriendshipRepository extends JpaRepository<Friendship, Integer> {

    Page<Friendship> findByUsersContaining(String user, Pageable pageable);

    Optional<Friendship> findByUsersIn(List<String> users);

}
 