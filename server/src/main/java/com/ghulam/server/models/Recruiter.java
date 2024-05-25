package com.ghulam.server.models;

import com.ghulam.server.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "recruiter")
public class Recruiter {
    @Id
    @GeneratedValue
    private Long recruiterId;
    private String fullname;
    private String username;
    private String email;
    private String password;
    private String contact;
    private String company;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Job> jobPosted = new ArrayList<>();
    private Role role;

    public void addJob(Job job) {
        this.jobPosted.add(job);
    }
}
