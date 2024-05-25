import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../models/applicant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recruiter } from '../models/recruiter';

const BASE_URL = 'http://localhost:8080/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  get_applicant(id: number): Observable<Applicant> {
    const param = new HttpParams().set("applicantId", id);
    return this.http.get<any>(BASE_URL + `/get-applicant`, { params: param });
  }

  get_recruiter(id: number): Observable<Recruiter> {
    const param = new HttpParams().set("recruiterId", id);
    return this.http.get<any>(BASE_URL + `/get-recruiter`, { params: param });
  }

}
