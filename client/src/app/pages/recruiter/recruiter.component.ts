import { Component } from '@angular/core';
import { Recruiter } from '../../models/recruiter';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrl: './recruiter.component.css'
})
export class RecruiterComponent {

  recruiter!: Recruiter;
  id: number = -1;

  constructor(
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = Number(this.storageService.get('userId'));

    this.userService.get_recruiter(this.id).subscribe({
      next: data => {
        this.recruiter = data;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
