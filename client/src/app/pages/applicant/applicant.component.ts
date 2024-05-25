import { Component } from '@angular/core';
import { Applicant } from '../../models/applicant';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css'
})
export class ApplicantComponent {

  applied_job: Job[] = [];
  applicant!: Applicant;
  id: number = -1;

  constructor(
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = Number(this.storageService.get('userId'));

    this.userService.get_applicant(this.id).subscribe({
      next: data => {
        this.applicant = data;
        this.applied_job = this.applicant.appliedFor;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
