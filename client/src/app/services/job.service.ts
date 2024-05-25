import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/api/v1/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) { }

  all_jobs(): Observable<Job[]> {
    return this.http.get<any>(BASE_URL + `/all-jobs`);
  }

  get_job(id: number): Observable<Job> {
    const param = new HttpParams().set("jobId", id);
    return this.http.get<any>(BASE_URL + `/get-job`, { params: param })
  }

  post_job(id: number, body: Job): Observable<any> {
    const param = new HttpParams().set('recruiterId', 1); // todo
    return this.http.post<any>(BASE_URL + `/new-job`, body, { params: param });
  }

}
