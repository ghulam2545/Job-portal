import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicantSignup } from '../models/applicant-signup';
import { RecruiterSignup } from '../models/recruiter-signup';
import { Login } from '../models/login';

const BASE_URL = 'http://localhost:8080/api/v1/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login_status: boolean = false;

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) { }

  register_applicant(body: ApplicantSignup): Observable<any> {
    const url = BASE_URL + `/register-applicant`;
    return this.http.post(url, body);
  }

  register_recruiter(body: RecruiterSignup): Observable<any> {
    const url = BASE_URL + `/register-recruiter`;
    return this.http.post(url, body);
  }

  login_applicant(body: Login): Observable<any> {
    const url = BASE_URL + `/login-applicant`;
    return this.http.post(url, body);
  }

  login_recruiter(body: Login): Observable<any> {
    const url = BASE_URL + `/login-recruiter`;
    return this.http.post(url, body);
  }

  is_logged(): boolean {
    return this.login_status;
  }

  set_login(status: boolean): void{
    this.login_status = status;
  }

  logout() {
    this.storageService.clear();
  }

}
