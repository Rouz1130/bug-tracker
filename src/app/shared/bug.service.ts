import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './bug';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BugService {
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // Post
  createBug(data): Observable<Bug> {
    return this.http
      .post<Bug>(
        this.baseurl + '/bugtracking/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
