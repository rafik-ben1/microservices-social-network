package com.example.chat_service.repositories;

import com.example.chat_service.models.Chat;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;


public interface ChatRepository extends MongoRepository<Chat, String> {
    Page<Chat> findByParticipantsContainingOrderByLastMessageSentAt(String participant, Pageable pageable);
    Optional<Chat> findByParticipants(List<String> participants);
}
