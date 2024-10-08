package com.example.friendsservice.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
public class UserRep {
    private String id;
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String avatar;
}
