package com.example.friendsservice.dto;

import com.fasterxml.jackson.annotation.JsonValue;

public enum FriendshipStatus {
    NONE("none"),
    FRIENDS("friends"),
    REQUEST_SENT("requestSent"),
    REQUEST_RECIEVED("requestRecieved"),
    SELF("self");
    private String displayValue;

    FriendshipStatus(String displayValue){
        this.displayValue = displayValue;
    }
     
    @JsonValue
    public String getDisplayValue(){
        return displayValue;
    }
}
