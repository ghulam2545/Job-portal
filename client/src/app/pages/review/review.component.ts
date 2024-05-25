import { Component } from '@angular/core';
import { Application } from '../../models/application';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  application!: Application;
  job_id: number = -1;
  title: string = '';
  company: string = '';

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
    private applicationService: ApplicationService
  ) { }

  ngOnInit() {
    this.job_id = this.router.snapshot.params['id'];
    this.application = this.dataService.getter();
  }

  submit_application(): void {
    console.log(this.application);
    this.applicationService.save_application(this.application);
  }

  print_application(): void {
    window.print();
  }

}
