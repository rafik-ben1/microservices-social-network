package com.example.friendsservice.controller;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.friendsservice.service.FriendService;
import com.example.friendsservice.user.UserRep;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;





@RestController
@RequestMapping("/api/v1/friends")
@RequiredArgsConstructor
public class FriendsController {
   
    private final FriendService friendService;
    
   @GetMapping
    Page<UserRep> getMyFriends(@RequestHeader("user") String user, Pageable pageable){
     return friendService.getMyFriends(user, pageable);
    }

    @GetMapping("/{id}")
    public String getFriendshipStatus(@RequestHeader("user") String user,@RequestParam String id ) {
        return new String();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void unfriend(@RequestHeader("user") String user,@RequestParam String id) {
        
    }
    
    
}
