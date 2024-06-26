package com.example.postservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;

import java.util.ArrayList;
import java.util.HashMap;


@RestControllerAdvice
public class GlobalHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> validationErrorHandler(MethodArgumentNotValidException ex){
       var response = new HashMap<String,Object>();
       var errors = new ArrayList<String>();
       ex.getBindingResult().getAllErrors().forEach(error -> {
           errors.add(error.getDefaultMessage());
       }    );
       response.put("StatusCode", HttpStatus.BAD_REQUEST.value());
       response.put("TimeStamp", Instant.now());
       response.put("errors",errors);
        return ResponseEntity
                .badRequest()
                .body(response);
    }
}
