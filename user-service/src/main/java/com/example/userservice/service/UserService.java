package com.example.userservice.service;
import com.example.userservice.dto.request.UpdateProfile;
import com.example.userservice.dto.response.UserProfileResponse;
import com.example.userservice.dto.response.UserResponse;
import com.example.userservice.mapper.UserRepMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import java.lang.reflect.Field;
import org.keycloak.admin.client.resource.RealmResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;


@Service
@RequiredArgsConstructor
public class UserService {

    private final RealmResource keycloak;
    private final UserRepMapper mapper;
    private final StorageService storageService;


    public List<UserResponse> searchUsers(String username){
     return keycloak.users()
             .searchByUsername(username,false)
             .stream()
             .map(mapper::mapToUserResponseDto)
             .toList();
           
    }

    public UserProfileResponse findOne(String id){
        return mapper.mapToUserProfileResponse(keycloak
                       .users()
                .get(id).toRepresentation());
    }

    @SneakyThrows
    public UserProfileResponse  updateProfile(String id, UpdateProfile dto){
       var user = keycloak.users()
                .get(id).toRepresentation();
       user.setLastName(dto.getLastname());
       user.setFirstName(dto.getFirstname());
       var attMap = user.getAttributes() != null ? user.getAttributes() 
                     : new HashMap<String , List<String>>() ;
       var fields = dto.getClass().getDeclaredFields();
       List<String> excludedFields = List.of("firstname","lastname");
        for (Field field : fields){
           if (!excludedFields.contains(field.getName())) {
            field.setAccessible(true);
            String property = field.get(dto).toString();
            if (property != null) {
                attMap.put(field.getName(), Collections.singletonList(property));
            }
        }
        }
       user.setAttributes(attMap);
       keycloak.users().get(id).update(user);
    return mapper.mapToUserProfileResponse(user);
    }

    public String updateAvarar(String userId , MultipartFile file){
      String avatar = storageService.save(userId, file);
      var user = keycloak.users().get(userId).toRepresentation();
      var attMap = user.getAttributes() != null ? user.getAttributes() 
                     : new HashMap<String , List<String>>() ;
      attMap.put("avatar",Collections.singletonList(avatar));
      user.setAttributes(attMap);
      keycloak.users().get(userId).update(user);
      return avatar;
    }
}
