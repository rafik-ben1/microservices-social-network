package com.example.userservice.service;
import com.example.userservice.dto.request.UpdateProfile;
import com.example.userservice.dto.response.UserResponse;
import com.example.userservice.mapper.UserRepMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import java.lang.reflect.Field;
import org.keycloak.admin.client.resource.RealmResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final RealmResource keycloak;
    private final UserRepMapper mapper;
    private final StorageService storageService;

    public List<UserResponse> searchUsers(String username) {
        return keycloak.users()
                .searchByUsername(username, false)
                .stream()
                .map(mapper::mapToUserResponse)
                .toList();

    }

    public UserResponse findOne(String id) {
        return mapper.mapToUserResponse(keycloak
                .users()
                .get(id).toRepresentation());
    }

    @SneakyThrows
    public UserResponse updateProfile(String id, UpdateProfile dto) {
        var user = keycloak.users()
                .get(id).toRepresentation();
        var fields = UpdateProfile.class.getDeclaredFields();
        for (Field field : fields) {
            field.setAccessible(true);
            if (field.getName() != "hobbies")
                user.singleAttribute(field.getName(), field.get(dto).toString());
            else {
                String[] hobbies = (String[]) field.get(dto);
                user.singleAttribute("hobbies", String.join(",", hobbies));
            }
        }
        keycloak.users().get(id).update(user);
        return mapper.mapToUserResponse(user);
    }

    public String updateAvarar(String userId, MultipartFile file) {
        String avatar = storageService.save(userId, file);
        var user = keycloak.users().get(userId).toRepresentation();
        user.singleAttribute("avatar", avatar);
        keycloak.users().get(userId).update(user);
        return avatar;
    }
}
