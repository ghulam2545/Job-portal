import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  is_logged(): boolean {
    return this.authService.is_logged();
  }

  logout(): void {
    this.authService.logout();
  }

  account() {
    const username = this.storageService.get('username');
    const role = this.storageService.get('role');

    if (role === 'ROLE_APPLICANT') {
      return `/applicant/${username}`;
    } else {
      return `/recruiter/${username}`;
    }

    // for (let index = 0; index < applicant_data.length; index++) {
    //   const element = applicant_data[index];

    //   if (element.email === email) {
    //     username = element.fullname;
    //   }
    // }
    // if (info?.startsWith('app')) {
    //   for (let index = 0; index < applicant_data.length; index++) {
    //     const element = applicant_data[index];

    //     if (element.email === email) {
    //       username = element.fullname;
    //     }
    //   }

    //   return `/applicant/${username}`;
    // } else {
    //   for (let index = 0; index < recruiter_data.length; index++) {
    //     const element = recruiter_data[index];

    //     if (element.email === email) {
    //       username = element.fullname;
    //     }
    //   }

    //   return `/recruiter/${username}`;
    // }
  }

}
