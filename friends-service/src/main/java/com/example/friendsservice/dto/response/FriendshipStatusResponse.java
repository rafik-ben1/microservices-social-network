package com.example.friendsservice.dto.response;

import com.example.friendsservice.dto.FriendshipStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FriendshipStatusResponse{
   private FriendshipStatus status;
   private int requestId;
}
