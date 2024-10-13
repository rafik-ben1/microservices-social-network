package com.example.friendsservice.dto;

import com.fasterxml.jackson.annotation.JsonValue;

public enum RequestType {
    SENT("sent"),
    RECIEVED("recieved");

    private final String label;

    RequestType(String label){
        this.label = label;
    }
    
    @JsonValue
    public String getLabel(){
        return label;
    }
}
