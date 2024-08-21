package com.example.chat_service.dto;

import com.example.chat_service.models.MessageType;
import lombok.*;


@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public final class MessageRequest {
    private  String content;
    private  String sentBy;
    private  MessageType type;

}
