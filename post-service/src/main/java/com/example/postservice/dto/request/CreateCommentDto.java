package com.example.postservice.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateCommentDto {
    @NotBlank(message = "Comments cannot be blank")
    private String content;
}
