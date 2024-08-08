package com.example.friendsservice.service;

import com.example.friendsservice.chat.ChatClient;
import com.example.friendsservice.chat.CreateChatRequest;
import com.example.friendsservice.model.Friendship;
import com.example.friendsservice.user.UserClient;
import com.example.friendsservice.user.UserRep;
import com.example.friendsservice.dto.RecievedRequestResponse;
import com.example.friendsservice.dto.SentRequestResponse;
import com.example.friendsservice.mapper.RequestMapper;
import com.example.friendsservice.model.Request;
import com.example.friendsservice.repository.RequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;
    private final UserClient userClient;
    private final RequestMapper mapper;
    private final ChatClient chatClient;
    public void sendFriendRequest(String from , String to){
        Request request = Request.builder()
                                 .sentBy(from)
                                 .sentTo(to)
                                 .build();
        requestRepository.save(request);
    }

    public void acceptRequest(int requestId){
        Request request = requestRepository.findById(requestId).get();
        Friendship friendship = Friendship.builder()
                .users(List.of(request.getSentBy(),request.getSentTo()))
                .build();
        CreateChatRequest createChatRequest = CreateChatRequest.builder()
                .participant(friendship.getUsers())
                .build();
        chatClient.createChat(createChatRequest);

    }
    public void removeRequest(int id){
        requestRepository.deleteById(id);
    }
    public Page<RecievedRequestResponse> getRecievedRequest(String user, Pageable pageable){
       return requestRepository.findBySentTo(user,pageable).map(request ->{
            UserRep userFound = userClient.findUserById(request.getSentBy());
            return mapper.mapToRecieved(request, userFound);
        } );
    }

    public Page<SentRequestResponse> getSentRequest(String user, Pageable pageable){
        return requestRepository.findBySentBy(user,pageable).map(request ->{
            UserRep userFound = userClient.findUserById(request.getSentTo());
            return mapper.mapToSent(request, userFound);
        } );
    }
}
