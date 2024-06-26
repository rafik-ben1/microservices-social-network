package com.example.postservice.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
public class CreateCommentDto {
    @NotBlank(message = "Comments cannot be blank")
    private String content;
}
