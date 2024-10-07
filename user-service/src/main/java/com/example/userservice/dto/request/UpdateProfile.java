package com.example.userservice.dto.request;
import com.example.userservice.dto.GenderType;
import com.example.userservice.dto.RelationshipStatus;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UpdateProfile {
    private String firstname;
    private String lastname;
    private String bio;
    private LocalDate bornAt;
    private GenderType gender;
    private RelationshipStatus relationshipStatus;
    private String[] hobbies;
    private String address;
}
