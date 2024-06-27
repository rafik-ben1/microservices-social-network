package com.example.userservice.service;
import com.example.userservice.dto.UserCreationDto;
import com.example.userservice.dto.UserResponseDto;
import com.example.userservice.mapper.UserRepMapper;
import jakarta.ws.rs.core.Response;
import lombok.RequiredArgsConstructor;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.UserResource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final Keycloak keycloak;
    private final UserRepMapper mapper;
    @Value("${keycloak.realm}")
    private String realm;
    public List<UserResponseDto> searchUsers(String username){
     return keycloak.realm(realm).users()
             .searchByUsername(username,false)
             .stream()
             .map(mapper::mapToUserResponseDto)
             .collect(Collectors.toList());
    }
    public Response create(UserCreationDto dto){
        return keycloak.realm(realm)
                .users()
                .create(mapper.mapFromUserCreationDto(dto));
    }

    public UserResponseDto findOne(String id){
        return  mapper.mapToUserResponseDto(keycloak.realm(realm)
                       .users()
                .get(id).toRepresentation());
    }
}
