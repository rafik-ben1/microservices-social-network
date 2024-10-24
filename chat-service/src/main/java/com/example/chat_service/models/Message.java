package com.example.chat_service.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    private String id;

    private String content;
    private String chatId;
    @Builder.Default
    private List<String> seenBy = new ArrayList<>();
    private MessageType type;

    @CreatedDate
    private LocalDateTime sentAt;

    private String sentBy;
}
