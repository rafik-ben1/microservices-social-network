package com.example.userservice.controller;
import com.example.userservice.dto.request.UpdateProfile;
import com.example.userservice.dto.response.UserProfileResponse;
import com.example.userservice.dto.response.UserResponse;
import com.example.userservice.service.UserService;

import jakarta.validation.Valid;
import jakarta.ws.rs.QueryParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UsersController {
   private final UserService userService;

   @GetMapping
    public List<UserResponse> getUsers(@QueryParam("search") String search ) {
    return userService.searchUsers(search);
   }
   @GetMapping("/{id}/profile")
   public UserProfileResponse findProfile(@PathVariable("id") String id ){
       return userService.findProfile(id);
   }
   @GetMapping("/{id}")
   public UserResponse findOne(@PathVariable("id") String id ){
       return userService.findOne(id);
   }

   @PatchMapping("/profile")
    public UserProfileResponse updateProfile(@RequestHeader("user") String user, @RequestBody @Valid UpdateProfile userDto ){
        
       return userService.updateProfile(user, userDto);
   }
   @PatchMapping(value = "/avatar" , consumes = "multipart/form-data")
   public String updateAvatar(@RequestHeader("user") String user ,@RequestParam("image") MultipartFile file ){
    return userService.updateAvarar(user, file);
   }

}
