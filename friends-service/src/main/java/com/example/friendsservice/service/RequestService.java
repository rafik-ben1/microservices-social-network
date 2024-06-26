package com.example.friendsservice.service;

import com.example.friendsservice.HttpClient.user.UserClient;
import com.example.friendsservice.HttpClient.user.UserRep;
import com.example.friendsservice.dto.RecievedRequestResponse;
import com.example.friendsservice.dto.SentRequestResponse;
import com.example.friendsservice.mapper.RequestMapper;
import com.example.friendsservice.model.Request;
import com.example.friendsservice.repository.RequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;
    private final UserClient userClient;
    private final RequestMapper mapper;

    public void addFriend(String from , String to){
        Request request = Request.builder()
                                 .sentBy(from)
                                 .sentTo(to)
                                 .build();
        requestRepository.save(request);
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
