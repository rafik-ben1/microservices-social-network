package com.example.userservice.mapper;

import com.example.userservice.dto.UserCreationDto;
import com.example.userservice.dto.UserResponseDto;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class UserRepMapper {
    public  UserResponseDto mapToUserResponseDto(UserRepresentation userRepresentation){
        return UserResponseDto.builder()
                .id(userRepresentation.getId())
                .username(userRepresentation.getUsername())
                .email(userRepresentation.getEmail())
                .firstname(userRepresentation.getFirstName())
                .lastname(userRepresentation.getLastName())
                .build();
    }
    public UserRepresentation mapFromUserCreationDto(UserCreationDto dto){
        UserRepresentation rep = new UserRepresentation();
        rep.setEmail(dto.getEmail());
        rep.setUsername(dto.getUsername());
        rep.setFirstName(dto.getFirstname());
        rep.setLastName(dto.getLastname());
        rep.setEnabled(true);
        List<CredentialRepresentation> credlist = new ArrayList();
        CredentialRepresentation cred = new CredentialRepresentation();
        cred.setTemporary(false);
        cred.setValue(dto.getPassword());
        credlist.add(cred);
        rep.setCredentials(credlist);
        return rep;
    }
}
