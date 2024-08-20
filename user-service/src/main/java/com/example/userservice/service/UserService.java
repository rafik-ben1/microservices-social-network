package com.example.userservice.service;
import com.example.userservice.dto.UpdateProfileDto;
import com.example.userservice.dto.UserDto;
import com.example.userservice.mapper.UserRepMapper;
import lombok.RequiredArgsConstructor;
import org.keycloak.admin.client.Keycloak;
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
    public List<UserDto> searchUsers(String username){
     return keycloak.realm(realm).users()
             .searchByUsername(username,false)
             .stream()
             .map(mapper::mapToUserResponseDto)
             .collect(Collectors.toList());
    }

    public UserDto findOne(String id){
        return  mapper.mapToUserResponseDto(keycloak.realm(realm)
                       .users()
                .get(id).toRepresentation());
    }
    public UserDto updateProfile(String id, UpdateProfileDto dto){
       var user = keycloak.realm(realm).users()
                .get(id).toRepresentation();
       user.setLastName(dto.getLastname());
       user.setFirstName(dto.getFirstname());
       user.setAttributes(mapper.FromAttributeToMap(dto.getAttributes()));
        keycloak.realm(realm).users().get(id).update(user);
        return mapper.mapToUserResponseDto(user);
    }
}
