import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/api/v1/application'

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient
  ) { }

  save_application(body: Application): Observable<Application> {
    return this.http.post<any>(BASE_URL + `/new-application`, body);
  }

  get_application(id: number): Observable<Application> {
    return this.http.get<any>(BASE_URL + `${id}`);
  }
}
