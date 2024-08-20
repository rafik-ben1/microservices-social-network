package com.example.userservice.mapper;

import com.example.userservice.dto.GenderType;
import com.example.userservice.dto.ProfileAttributes;
import com.example.userservice.dto.UserDto;
import lombok.SneakyThrows;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserRepMapper {
    public UserDto mapToUserResponseDto(UserRepresentation userRepresentation){
        return UserDto.builder()
                .id(userRepresentation.getId())
                .username(userRepresentation.getUsername())
                .email(userRepresentation.getEmail())
                .firstname(userRepresentation.getFirstName())
                .lastname(userRepresentation.getLastName())
                .attributes(fromMapToProfileAttributes(userRepresentation.getAttributes()))
                .build();
    }

    public ProfileAttributes fromMapToProfileAttributes(Map<String , List<String>> att ){
        return  ProfileAttributes.builder()
                .avatar(att.get("avatar").get(0))
                .bio(att.get("bio").get(0))
                .bornAt(LocalDateTime.parse(att.get("bornAt").get(0)))
                .gender(GenderType.valueOf(att.get("gender").get(0)))
                .isSingle(Boolean.parseBoolean(att.get("isSingle").get(0)))
                .build();
    }
    @SneakyThrows
    public Map<String , List<String>> FromAttributeToMap(ProfileAttributes attributes){
        var att = new HashMap<String, List<String>>();
        var fields = attributes.getClass().getFields();
        for (Field field : fields){
            field.setAccessible(true);
            att.put(field.getName(),
                    List.of(field.get(attributes).toString()));
        }
        return att;
    }
}
