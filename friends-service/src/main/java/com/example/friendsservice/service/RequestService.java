package com.example.friendsservice.service;
import com.example.friendsservice.chat.ChatClient;
import com.example.friendsservice.chat.CreateChatRequest;
import com.example.friendsservice.dto.RequestType;
import com.example.friendsservice.dto.response.RequestResponse;
import com.example.friendsservice.kafka.EventPublisher;
import com.example.friendsservice.model.Friendship;
import com.example.friendsservice.repository.FriendshipRepository;
import com.example.friendsservice.user.UserClient;
import com.example.friendsservice.user.UserRep;
import com.example.friendsservice.mapper.RequestMapper;
import com.example.friendsservice.model.Request;
import com.example.friendsservice.repository.RequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;
    private final UserClient userClient;
    private final RequestMapper mapper;
    private final ChatClient chatClient;
    private final EventPublisher eventPublisher;
    private final FriendshipRepository friendshipRepository;

    public void sendFriendRequest(String from , String to){
        Request request = Request.builder()
                                 .sentBy(from)
                                 .sentTo(to)
                                 .build();
       Request saved = requestRepository.save(request);
      eventPublisher.sendFriendRequestEvent(saved.getSentBy(),saved.getSentTo(),false);
    }

    public void acceptRequest(int requestId){
        Request request = requestRepository.findById(requestId).get();
        Friendship friendship = Friendship.builder()
                .users(List.of(request.getSentBy(),request.getSentTo()))
                .build();
        friendshipRepository.save(friendship);
        requestRepository.deleteById(requestId);
        CreateChatRequest createChatRequest = CreateChatRequest.builder()
                .participant(friendship.getUsers())
                .build();
        chatClient.createChat(createChatRequest);
        eventPublisher.sendFriendRequestEvent(request.getSentBy(), request.getSentTo(),true);

    }

  

    public void removeRequest(int id){
        requestRepository.deleteById(id);
    }
    public Page<RequestResponse> getRecievedRequest(String user, Pageable pageable){
       return requestRepository.findBySentTo(user,pageable).map(request ->{
            UserRep userFound = userClient.findUserById(request.getSentBy());
            return mapper.mapToResponse(request, userFound,RequestType.RECIEVED);
        } );
    }

    public Page<RequestResponse> getSentRequest(String user, Pageable pageable){
        return requestRepository.findBySentBy(user,pageable).map(request ->{
            UserRep userFound = userClient.findUserById(request.getSentTo());
            return mapper.mapToResponse(request, userFound,RequestType.SENT);
        } );
    }
}
