package com.example.friendsservice.HttpClient.user;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url = "http://localhost:8030/api/v1/users",name = "user-client")
public interface UserClient {
    @GetMapping("/{id}")
    public UserRep findUserById(@PathVariable("id") String id );
}
