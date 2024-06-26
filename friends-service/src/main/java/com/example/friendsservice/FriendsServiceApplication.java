package com.example.friendsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class FriendsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FriendsServiceApplication.class, args);
	}

}
