package com.example.chat_service.user;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-client", url = "http://user-service:8030/api/v1/users")
public interface UserClient {
    @GetMapping("/{id}")
    public UserRep findUserById(@PathVariable("id") String id );
}
