package com.example.postservice.exceptions;

import jakarta.ws.rs.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalHandler {
        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<ErrorResponse> validationErrorHandler(MethodArgumentNotValidException ex) {

                var msg = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
                ErrorResponse response = new ErrorResponse(HttpStatus.BAD_REQUEST.getReasonPhrase(),
                                msg, LocalDateTime.now());
                return ResponseEntity
                                .badRequest()
                                .body(response);
        }

        @ExceptionHandler(NotFoundException.class)
        public ResponseEntity<ErrorResponse> handelNotFOund(NotFoundException ex) {
                ErrorResponse response = new ErrorResponse(HttpStatus.BAD_REQUEST.getReasonPhrase(),
                                ex.getMessage(), LocalDateTime.now());
                return ResponseEntity
                                .status(HttpStatus.NOT_FOUND.value())
                                .body(response);
        }
}
