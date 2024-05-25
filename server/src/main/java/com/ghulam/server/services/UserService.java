package com.ghulam.server.services;

import com.ghulam.server.models.Applicant;
import com.ghulam.server.models.Recruiter;
import com.ghulam.server.repositories.ApplicantRepository;
import com.ghulam.server.repositories.RecruiterRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public final ApplicantRepository applicantRepository;
    private final RecruiterRepository recruiterRepository;

    public UserService(ApplicantRepository applicantRepository, RecruiterRepository recruiterRepository) {
        this.applicantRepository = applicantRepository;
        this.recruiterRepository = recruiterRepository;
    }

    public Applicant getApplicant(Long id) {
        return applicantRepository.findById(id).orElse(null);
    }

    public Recruiter getRecruiter(Long id) {
        return recruiterRepository.findById(id).orElse(null);
    }

}
