package com.example.userservice.dto.response;

import com.example.userservice.dto.ProfileAttributes;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
    private String id;
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String avatar;
    private ProfileAttributes profileAttributes;
}
