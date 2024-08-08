package com.example.userservice.controller;

import com.example.userservice.dto.UserResponseDto;
import com.example.userservice.service.UserService;
import jakarta.ws.rs.QueryParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UsersController {
   private final UserService userService;
   @GetMapping
    public List<UserResponseDto> getUsers(@QueryParam("search") String search ) {
    return userService.searchUsers(search);
   }
   @GetMapping("/{id}")
   public UserResponseDto findOne(@PathVariable("id") String id ){
       return userService.findOne(id);
   }

}
