package com.ghulam.server.services;

import com.ghulam.server.dtos.ApplicationRequest;
import com.ghulam.server.models.Applicant;
import com.ghulam.server.models.Application;
import com.ghulam.server.models.Job;
import com.ghulam.server.repositories.ApplicantRepository;
import com.ghulam.server.repositories.ApplicationRepository;
import org.springframework.stereotype.Service;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final ApplicantRepository applicantRepository;
    private final JobService jobService;

    public ApplicationService(
            ApplicationRepository applicationRepository,
            ApplicantRepository applicantRepository,
            JobService jobService
    ) {
        this.applicationRepository = applicationRepository;
        this.applicantRepository = applicantRepository;
        this.jobService = jobService;
    }


    public void save(Long applicantId, Long jobId, ApplicationRequest dto) {
        try {
            Application application = new Application();

            application.setFullname(dto.fullname());
            application.setEmail(dto.email());
            application.setPhone(dto.phone());
            application.setEducation(dto.education());
            application.setField(dto.field());
            application.setPerformance(dto.performance());
            application.setSkills(dto.skills());
            application.setExperience(dto.experience());
            application.setCover(dto.cover());
            application.setPortfolio(dto.portfolio());
            application.setLinkedin(dto.linkedin());
            application.setGithub(dto.github());
            application.setOther(dto.other());
            application.setComments(dto.comments());

            Applicant applicant = applicantRepository.findById(applicantId).orElse(null);
            Job job = jobService.getJob(jobId);

            applicant.addJob(job);

            applicationRepository.save(application);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public Application get(Long applicationId) {
        try {
            return applicationRepository.findById(applicationId).orElse(null);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
