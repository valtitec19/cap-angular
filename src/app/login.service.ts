import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }

   login(request: LoginRequest): Observable<LoginResponse> {
     return this.http.post<LoginResponse>(
       "https://reqres.in/api/login",
       request
       );
   }
}
