import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { School } from '../models/School';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  urlDominio: string;
  
  constructor(private apiService: ApiService, private httpClient: HttpClient) {
    this.urlDominio = 'http://localhost:3000'
  }

  public getSchools(): Observable<Array<School>> {
    return this.apiService
        .get(`${this.urlDominio}/schools`)
        .pipe(
            map((res: any) => res),
            catchError((error) => throwError(error))
        )
  }

  public getSchoolById(id: number): Observable<School> {
    return this.apiService
        .get(`${this.urlDominio}/schools/${id}`)
        .pipe(
            map((res: any) => res),
            catchError((error) => throwError(error))
        )
  }

  public saveSchool(school: School): Observable<any> {
    let url = `${this.urlDominio}/schools`;
    return this.apiService.post(url, school)
        .pipe(
            map(res => res),
            catchError(error => throwError(error)));
  }

}
