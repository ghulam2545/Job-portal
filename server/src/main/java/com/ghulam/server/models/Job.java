package com.ghulam.server.models;

import com.ghulam.server.enums.JobType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "job")
public class Job {
    @Id
    @GeneratedValue
    private Long jobId;
    private String title;
    private String company;
    private String location;
    private String skills;
    private String experience;
    private JobType jobType;
    private String postedDate; // todo
}
