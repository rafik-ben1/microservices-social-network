package com.example.friendsservice.user;
import java.time.LocalDate;

import lombok.Getter;

@Getter
public class UserRep {
    private String id;
    private String username;
    private String email;
    private String firstname;
    private String lastname;
    private String avatar;
    private String bio;
    private LocalDate bornat;
    private String gender;
    private String relationshipstatus;
    private String[] hobbies;
    private String address;
}
