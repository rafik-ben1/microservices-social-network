package com.example.userservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> validationErrorHandler(MethodArgumentNotValidException ex){

      var msg = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
      
      var response = new ErrorResponse(HttpStatus.BAD_REQUEST.getReasonPhrase(),
       msg, LocalDateTime.now());
      
      return ResponseEntity.badRequest().body(response); 
    }

}
