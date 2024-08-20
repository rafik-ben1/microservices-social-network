package com.example.userservice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Setter
@Getter
public class ProfileAttributes {
    private String avatar;
    private String bio;
    private LocalDateTime bornAt;
    private GenderType gender;
    private boolean isSingle;
}
