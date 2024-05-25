package com.ghulam.server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "application")
public class Application {
    @Id
    @GeneratedValue
    private Long applicationId;
    private String fullname;
    private String email;
    private String phone;
    private String education;
    private String field;
    private String performance;
    private String skills;
    private String experience;
    private String cover;
    private String portfolio;
    private String linkedin;
    private String github;
    private String other;
    private String comments;
}
