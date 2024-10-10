package com.example.friendsservice.repository;

import com.example.friendsservice.model.Request;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface RequestRepository extends JpaRepository<Request, Integer> {
    Page<Request> findBySentTo(String to , Pageable pageable);
    Page<Request> findBySentBy(String by , Pageable pageable);
    List<Request> findBySentTo(String sentTo);
    Optional<Request> findBySentByAndSentTo(String sentBy, String sentTo);
}
