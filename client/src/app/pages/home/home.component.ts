import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  jobs: Job[] = []

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.all_jobs().subscribe({
      next: data => {
        this.jobs = data;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
