package com.example.userservice.mapper;
import com.example.userservice.dto.GenderType;
import com.example.userservice.dto.RelationshipStatus;
import com.example.userservice.dto.response.UserProfileResponse;
import com.example.userservice.dto.response.UserResponse;

import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.Optional;


@Service
public class UserRepMapper {
    public UserProfileResponse mapToUserProfileResponse(UserRepresentation userRepresentation) {
      var bornAt = Optional.ofNullable(userRepresentation.firstAttribute("bornAt"))
        .map(LocalDate::parse)
        .orElse(null);

      var gender = Optional.ofNullable(userRepresentation.firstAttribute("gender"))
        .map(GenderType::valueOf)
        .orElse(null);

      var relationshipStatus = Optional.ofNullable(userRepresentation.firstAttribute("relationshipStatus"))
                    .map(RelationshipStatus::valueOf)
                    .orElse(null);

      var hobbies = Optional.ofNullable(userRepresentation.firstAttribute("hobbies"))
                  .map(h -> h.split(","))
                  .orElse(null);
                  
        return UserProfileResponse.builder()
                .id(userRepresentation.getId())
                .username(userRepresentation.getUsername())
                .email(userRepresentation.getEmail())
                .firstname(userRepresentation.getFirstName())
                .lastname(userRepresentation.getLastName())
                .avatar(userRepresentation.firstAttribute("avatar"))
                .address(userRepresentation.firstAttribute("address"))
                .bio(userRepresentation.firstAttribute("bio"))
                .bornAt(bornAt)
                .gender(gender)
                .relationshipStatus(relationshipStatus)
                .hobbies(hobbies)
                .build();
    }

    public UserResponse mapToUserResponse(UserRepresentation userRepresentation){
        return UserResponse.builder()
                      .id(userRepresentation.getId())
                      .username(userRepresentation.getUsername())
                      .email(userRepresentation.getEmail())
                      .firstname(userRepresentation.getFirstName())
                      .lastname(userRepresentation.getLastName())
                      .avatar(userRepresentation.firstAttribute("avatar"))
                      .build();
    }

}
