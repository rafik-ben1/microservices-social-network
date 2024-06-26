package com.example.friendsservice.controller;

import com.example.friendsservice.dto.RecievedRequestResponse;
import com.example.friendsservice.dto.SentRequestResponse;
import com.example.friendsservice.service.RequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/friends/requests")
@RequiredArgsConstructor
public class RequestController {
    private final RequestService requestService;

    @PostMapping("/{sendTo}")
    ResponseEntity<?> addFriend(@RequestHeader("user") String sender, @PathVariable("sendTo") String to ){
        requestService.addFriend(sender,to);
        return ResponseEntity.accepted().build();
    }

    @DeleteMapping("/{requestId}")
    ResponseEntity<?> removeRequest(@PathVariable("requestId") int requestId ){
        requestService.removeRequest(requestId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/recieved")
    Page<RecievedRequestResponse> getRecieved(@RequestHeader("user") String user, Pageable pageable){
     return requestService.getRecievedRequest(user, pageable);
    }

    @GetMapping("/sent")
    Page<SentRequestResponse> getSent(@RequestHeader("user") String user , Pageable pageable ){
        return requestService.getSentRequest(user, pageable);
    }


}
