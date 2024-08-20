package com.example.userservice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class UpdateProfileDto {
    private String firstname;
    private String lastname;
    private ProfileAttributes attributes;
}
