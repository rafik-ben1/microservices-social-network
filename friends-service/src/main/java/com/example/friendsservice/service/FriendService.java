package com.example.friendsservice.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.friendsservice.dto.FriendshipStatus;
import com.example.friendsservice.dto.response.FriendshipStatusResponse;
import com.example.friendsservice.repository.FriendshipRepository;
import com.example.friendsservice.repository.RequestRepository;
import com.example.friendsservice.user.UserClient;
import com.example.friendsservice.user.UserRep;

import jakarta.ws.rs.NotFoundException;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FriendService {
   private final FriendshipRepository fRepository;
   private final RequestRepository requestRepository;
   private final UserClient userClient;
   
    public Page<UserRep> getMyFriends(String user , Pageable pageable){     
     var friendships =  fRepository.findByUsersContaining(user,pageable);
      return friendships.map(friendship -> {
        var friendId = friendship.getUsers().stream()
              .filter(id -> !id.equals(user)).findFirst().get();
              return userClient.findUserById(friendId);
    });
   
    }
   
    public FriendshipStatusResponse getFriendshipStatus(String user , String id){
      if (user.equals(id)) {
        return FriendshipStatusResponse.builder()
                  .status(FriendshipStatus.SELF).build();
      }
      var isFriend = fRepository.findByUsersIn(List.of(user,id)).isPresent();
      if (isFriend) {
        return FriendshipStatusResponse.builder().status(FriendshipStatus.FRIENDS).build();
      }
      
      var isRequestSent = requestRepository.findBySentByAndSentTo(user, id);
      if (isRequestSent.isPresent()) {
        return FriendshipStatusResponse.builder().status(FriendshipStatus.REQUEST_SENT)
               .requestId(isRequestSent.get().getId()).build();
      }
      
      var isRequestRecieved =  requestRepository.findBySentByAndSentTo(id, user);
      if (isRequestRecieved.isPresent()) {
        return FriendshipStatusResponse.builder().status(FriendshipStatus.REQUEST_RECIEVED)
               .requestId(isRequestRecieved.get().getId()).build();
      }
        
       return FriendshipStatusResponse.builder().status(FriendshipStatus.NONE).build();
    }
   
    public void unfriend(String user,String id){
      var friendship = fRepository.findByUsersIn(List.of(user, id))
                               .orElseThrow(NotFoundException::new);
      fRepository.delete(friendship);                         
    }

}
