import { Component } from '@angular/core';
import { Job } from '../../models/job';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  id: number = 0;
  job: Job = {
    jobId: 0,
    title: '',
    companyName: '',
    location: '',
    skills: '',
    experience: '',
    jobType: '',
    postedDate: ''
  };

  constructor(
    private router: ActivatedRoute,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];

    this.jobService.get_job(this.id).subscribe({
      next: data => {
        this.job = data;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
