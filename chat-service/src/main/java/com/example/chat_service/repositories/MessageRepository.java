package com.example.chat_service.repositories;
import com.example.chat_service.models.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MessageRepository extends MongoRepository<Message, String> {
    Page<Message> findByChatIdOrderBySentAtDesc (String chatid, Pageable pageable);

    @Query(value = "{ 'chatid' : ? 0  }" , delete = true)

    void deleteByChatId(String chatId);
}
