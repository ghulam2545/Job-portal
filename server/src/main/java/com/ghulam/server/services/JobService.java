package com.ghulam.server.services;

import com.ghulam.server.dtos.JobRequest;
import com.ghulam.server.models.Job;
import com.ghulam.server.models.Recruiter;
import com.ghulam.server.repositories.JobRepository;
import com.ghulam.server.repositories.RecruiterRepository;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final RecruiterRepository recruiterRepository;

    public JobService(JobRepository jobRepository, RecruiterRepository recruiterRepository) {
        this.jobRepository = jobRepository;
        this.recruiterRepository = recruiterRepository;
    }

    public void postJob(Long recruiterId, JobRequest request) {
        Job job = new Job();
        job.setTitle(request.title());
        job.setCompany(request.company());
        job.setLocation(request.location());
        job.setSkills(request.skills());
        job.setExperience(request.experience());
        job.setJobType(request.jobType());
        job.setPostedDate("Today");

        Recruiter recruiter = recruiterRepository.findById(recruiterId).orElse(null);
        assert recruiter != null;
        recruiter.addJob(job);

        jobRepository.save(job);
    }

    public Object allJobs() {
        return jobRepository.findAll();
    }

    public Job getJob(Long jobId) {
        return jobRepository.findById(jobId).orElse(null);
    }
}
