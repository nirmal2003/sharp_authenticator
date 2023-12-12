package com.sharp.main.auth;

import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.dto.user.UserRequest;
import com.sharp.main.user.User;
import com.sharp.main.user.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public UserDTO createUser(UserRequest userRequest, HttpServletResponse response) {
        Optional<User> user1 = userRepository.findByEmail(userRequest.getEmail());

        if (user1.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "email already used!");
        }

        User user = userRepository.saveAndFlush(User.builder()
                .email(userRequest.getEmail())
                .name(userRequest.getName())
                .password(passwordEncoder.encode(userRequest.getPassword()))
                .build());

        String token = jwtService.generateToken(user);

        Cookie cookie = new Cookie("sharp_token", token);
        cookie.setMaxAge(3600 * 24 * 50);
        cookie.setHttpOnly(true);
        cookie.setPath("/");

        response.addCookie(cookie);

        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .image(user.getImage())
                .build();
    }

    public UserDTO login(UserRequest userRequest, HttpServletResponse response) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRequest.getEmail(), userRequest.getPassword()));

        User user = userRepository.findByEmail(userRequest.getEmail()).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "user not found"));

        String token = jwtService.generateToken(user);

        Cookie cookie = new Cookie("sharp_token", token);
        cookie.setMaxAge(3600 * 24 * 50);
        cookie.setHttpOnly(true);
        cookie.setPath("/");

        response.addCookie(cookie);

        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .image(user.getImage())
                .build();
    }

    public UserDTO getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();

        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .image(user.getImage())
                .build();
    }
}
