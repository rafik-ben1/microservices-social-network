package com.example.userservice.dto;
import lombok.*;
import java.time.LocalDate;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProfileAttributes {
    private String bio;
    private LocalDate bornAt;
    private GenderType gender;
    private boolean isSingle;
}
