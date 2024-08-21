package com.example.userservice.controller;

import com.example.userservice.dto.UpdateProfileDto;
import com.example.userservice.dto.UserDto;
import com.example.userservice.service.StorageService;
import com.example.userservice.service.UserService;
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
   private final StorageService storageService;
   @GetMapping
    public List<UserDto> getUsers(@QueryParam("search") String search ) {
    return userService.searchUsers(search);
   }
   @GetMapping("/{id}")
   public UserDto findOne(@PathVariable("id") String id ){
       return userService.findOne(id);
   }

   @PatchMapping(value = "/profile", consumes = "multipart/form-data")
    public UserDto updateProfile(@RequestHeader("user") String user, @ModelAttribute UpdateProfileDto userDto, @RequestParam("image") MultipartFile image ){
       String imagePath = storageService.save(user, image);
       userDto.getAttributes().setAvatar(imagePath);
       return userService.updateProfile(user, userDto);
   }
}
