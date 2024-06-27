package com.example.userservice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserCreationDto {
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String password;
}
