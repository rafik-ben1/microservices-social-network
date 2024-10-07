package com.example.userservice.service;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;

@Service
public class StorageService {
    private final String uploadPath = "uploads/";

    public String save(String user , MultipartFile file){
        Path uploads = Paths.get(uploadPath);
        String fileName =user + LocalDateTime.now().getSecond() + file.getOriginalFilename() ;
        try {
            if(!Files.exists(uploads)) {
                Files.createDirectory(uploads);
            }
            InputStream fis = file.getInputStream();
            Path savingPath = uploads.resolve(fileName);
            Files.copy(fis,savingPath, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return "uploads/avatars/" +  fileName;
    }
}

