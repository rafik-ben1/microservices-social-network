package com.example.userservice.dto;

import com.fasterxml.jackson.annotation.JsonValue;

public enum GenderType {
    MALE("male"),
    FEMALE("female");

 private final String displayValue;

 GenderType(String displayValue) {
  this.displayValue = displayValue;
 }
 
 @JsonValue
 public String getDisplayValue(){
    return displayValue;
 }

}
