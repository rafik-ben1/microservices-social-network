package com.example.userservice.dto.response;
import java.time.LocalDate;
import com.example.userservice.dto.GenderType;
import com.example.userservice.dto.RelationshipStatus;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileResponse {
    private String id;
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String avatar;
    private String bio;
    private LocalDate bornAt;
    private GenderType gender;
    private RelationshipStatus relationshipStatus;
    private String[] hobbies;
    private String address;
}
