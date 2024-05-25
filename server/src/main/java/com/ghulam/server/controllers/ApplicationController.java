package com.ghulam.server.controllers;

import com.ghulam.server.dtos.ApplicationRequest;
import com.ghulam.server.models.Application;
import com.ghulam.server.services.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "${api.endpoints.base-url}/application")
@CrossOrigin("*")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping("/new-application")
    public ResponseEntity<?> save(
            @RequestParam Long applicantId,
            @RequestParam Long jobId,
            @RequestBody ApplicationRequest dto
    ) {
        applicationService.save(applicantId, jobId, dto);
        return ResponseEntity.ok("saved");
    }

    @GetMapping("/{applicationId}")
    public ResponseEntity<?> get(@PathVariable Long applicationId) {
        Application application = applicationService.get(applicationId);
        return ResponseEntity.ok(application);
    }

}
