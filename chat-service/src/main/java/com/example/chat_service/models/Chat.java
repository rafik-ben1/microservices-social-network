package com.example.chat_service.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;

@Document
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Chat {
    @Id
    private String id;
    private Message lastMessage;
    private String chatName;
    private Boolean isGroupChat;
    @Builder.Default
    private List<String> participants = new ArrayList<>();

}
