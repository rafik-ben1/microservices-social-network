package com.example.userservice.dto;

import com.fasterxml.jackson.annotation.JsonValue;

public enum RelationshipStatus {
    SINGLE("single"),
    INRELATIONSHIP("in a relationship"),
    ENGAGED("engaged"),
    MARRIED("married"),
    DIVORCED("divorced"),;

 private final String displayValue;

 RelationshipStatus(String displayValue) {
  this.displayValue = displayValue;
 }
 
 @JsonValue
 public String getDisplayValue(){
    return displayValue;
 }


}
