package com.example.chat_service.repositories;

import com.example.chat_service.models.Chat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ChatRepository extends MongoRepository<Chat, String> {
    Page<Chat> findByParticipantsContainingOrderByLastSent(String participant, Pageable pageable);
}
