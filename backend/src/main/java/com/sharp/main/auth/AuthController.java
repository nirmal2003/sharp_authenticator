package com.sharp.main.auth;

import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.dto.user.UserRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;


    @PostMapping(path = "/register")
    public UserDTO createUser(UserRequest userRequest, HttpServletResponse response) {
        return authService.createUser(userRequest, response);
    }

    @PostMapping(path = "/login")
    public UserDTO login(UserRequest userRequest, HttpServletResponse response) {
        return authService.login(userRequest, response);
    }
}
