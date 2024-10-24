package com.example.chat_service.dto;

import java.util.List;


public record CreatChatDto(
     List<String> participants,
     boolean isGroupChat,    
     String chatName
) {} 
     
      