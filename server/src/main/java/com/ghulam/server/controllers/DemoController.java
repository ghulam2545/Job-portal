package com.ghulam.server.controllers;

import com.ghulam.server.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "${api.endpoints.base-url}/demo")
@CrossOrigin("*")
public class DemoController {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public DemoController(JwtService jwtService, AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @GetMapping("/public")
    public String everyone() {
        return "EVERYONE";
    }

    @GetMapping("/applicant")
    @PreAuthorize("hasRole('APPLICANT')")
    public String applicant() {
        return "APPLICANT ONLY";
    }

    @GetMapping("/recruiter")
    @PreAuthorize("hasRole('RECRUITER')")
    public String recruiter() {
        return "RECRUITER ONLY";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestParam String email,
            @RequestParam String password
    ) {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (Exception e) {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.BAD_REQUEST);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtService.generateTokenFromUsername((UserDetails) authentication.getPrincipal());
        return ResponseEntity.ok(token);
    }
}
