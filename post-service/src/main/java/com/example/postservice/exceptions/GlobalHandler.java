package com.example.postservice.exceptions;

import jakarta.ws.rs.NotFoundException;
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
    public ResponseEntity<ErrorResponse> validationErrorHandler(MethodArgumentNotValidException ex){
       var errors = new ArrayList<String>();

      var msg = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
      ErrorResponse response = new ErrorResponse(
              Instant.now(),
              HttpStatus.BAD_REQUEST,
              HttpStatus.BAD_REQUEST.value(),
              msg
      );
        return ResponseEntity
                .badRequest()
                .body(response);
    }
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorResponse> handelNotFOund(NotFoundException ex){
        ErrorResponse response = new ErrorResponse(
                Instant.now(),
                HttpStatus.NOT_FOUND,
                HttpStatus.NOT_FOUND.value(),
                ex.getMessage()
        );
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND.value())
                .body(response);
    }
}
