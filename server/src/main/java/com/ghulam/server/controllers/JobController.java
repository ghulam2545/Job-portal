package com.ghulam.server.controllers;

import com.ghulam.server.dtos.JobRequest;
import com.ghulam.server.models.Job;
import com.ghulam.server.services.JobService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "${api.endpoints.base-url}/jobs")
@CrossOrigin("*")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/new-job")
    public String postJob(
            @RequestParam Long recruiterId,
            @RequestBody JobRequest request
    ) {
        jobService.postJob(recruiterId, request);
        return null;
    }

    @GetMapping("/get-job")
    public Object getJob(
            @RequestParam Long jobId
    ) {
        Job job = jobService.getJob(jobId);
        return ResponseEntity.ok(job);
    }

    @GetMapping("/all-jobs")
    public Object getAllJobs() {
        return jobService.allJobs();
    }
}
