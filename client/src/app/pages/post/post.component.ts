import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  post_form!: FormGroup;
  builder: FormBuilder = new FormBuilder;
  job!: Job;

  constructor(
    private jobService: JobService,
    private router: Router,
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.post_form = this.builder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      skills: ['', Validators.required],
      experience: ['', Validators.required],
      jobType: ['', Validators.required],
    });
  }

  onSubmit() {
    const id: number = Number(this.storageService.get('userId'));
    // const d = this.userService.get_recruiter(id);

    this.job = this.post_form.value;
    this.job.postedDate = 'Today';

    this.jobService.post_job(id, this.job).subscribe({
      next: data => {
        console.log('job post');
      }, error: err => {
        console.error(err);
      }
    });

    alert('Your job posted. thanks');
    this.router.navigate(['']);
  }

  f(value: string) {
    return this.post_form.get(value);
  }

}
