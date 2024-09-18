package com.example.userservice.mapper;
import com.example.userservice.dto.GenderType;
import com.example.userservice.dto.ProfileAttributes;
import com.example.userservice.dto.response.UserProfileResponse;
import com.example.userservice.dto.response.UserResponse;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class UserRepMapper {
    public UserResponse mapToUserResponseDto(UserRepresentation userRepresentation){
        return UserResponse.builder()
                .id(userRepresentation.getId())
                .username(userRepresentation.getUsername())
                .email(userRepresentation.getEmail())
                .firstname(userRepresentation.getFirstName())
                .lastname(userRepresentation.getLastName())
                .avatar(userRepresentation.firstAttribute("avatar"))
                .build();
    }
    
    public UserProfileResponse mapToUserProfileResponse(UserRepresentation userRepresentation){
      return UserProfileResponse.builder()
      .id(userRepresentation.getId())
      .username(userRepresentation.getUsername())
      .email(userRepresentation.getEmail())
      .firstname(userRepresentation.getFirstName())
      .lastname(userRepresentation.getLastName())
      .avatar(userRepresentation.firstAttribute("avatar"))
      .profileAttributes(fromMapToProfileAttributes(userRepresentation.getAttributes()))
      .build(); 
    }

    public ProfileAttributes fromMapToProfileAttributes(Map<String , List<String>> att ){
        if(att != null) {
            var bornAt = att.containsKey("bornAt") ? LocalDate.parse(att.get("bornAt").get(0)) : null;
            var isSingle = !att.containsKey("isSingle") || Boolean.getBoolean(att.get("isSingle").get(0));
            var gender = att.containsKey("gender") ? GenderType.valueOf(att.get("gender").get(0)) : null;
            return ProfileAttributes.builder()
                    .bio(att.get("bio").get(0))
                    .bornAt(bornAt)
                    .gender(gender)
                    .isSingle(isSingle)
                    .build();
        }
        return null;
    }

}
