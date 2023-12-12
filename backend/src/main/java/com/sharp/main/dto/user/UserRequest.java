package com.sharp.main.dto.user;

import lombok.Data;

@Data
public class UserRequest {
    private String email;
    private String name;
    private String password;
}
