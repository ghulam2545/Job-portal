package com.ghulam.server.controllers;

import com.ghulam.server.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "${api.endpoints.base-url}/users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/get-applicant")
    public Object getApplicant(@RequestParam Long applicantId) {
        return ResponseEntity.ok(userService.getApplicant(applicantId));
    }

    @GetMapping("/get-recruiter")
    public Object getRecruiter(@RequestParam Long recruiterId) {
        return ResponseEntity.ok(userService.getRecruiter(recruiterId));
    }
}
