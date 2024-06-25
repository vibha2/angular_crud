import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {};

  getData(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`)
  }
}
