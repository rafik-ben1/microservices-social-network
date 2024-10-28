package com.example.postservice.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreatePostDto {
    @NotBlank(message = "post content cannot be blank")
    private String Content;
}
