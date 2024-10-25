package com.example.userservice.dto.request;

import com.example.userservice.dto.GenderType;
import com.example.userservice.dto.RelationshipStatus;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
    @NotBlank(message = "firstname is required")
    @NotNull(message = "firstname is required")
    @Size(max = 50 , min = 3 , message = "privide a valid firstname please")
    private String firstname;
    
    @NotBlank(message = "lastname is required")
    @NotNull(message = "lastname is required")
    @Size(max = 50 , min = 3 , message = "privide a valid lastname please")
    private String lastname;
    
    @Size(max = 50 , min = 3 , message = "privide a valid bio please")
    private String bio;
    
    @Past(message = "provide a valid birthday please")
    private LocalDate bornAt;
    
    private GenderType gender;
    private RelationshipStatus relationshipStatus;
    
    private String[] hobbies;
    @Size(max = 80 , min = 3 , message = "privide a valid address please")
    private String address;
}
