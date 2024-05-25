package com.ghulam.server.dtos;

import com.ghulam.server.enums.JobType;

public record JobRequest(
        String title,
        String company,
        String location,
        String skills,
        String experience,
        JobType jobType
) {
}
