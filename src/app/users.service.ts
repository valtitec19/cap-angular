import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, SigleDatResponse, UsersResponde } from './model/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersResponde>{
    return this.http.get<UsersResponde>( `${environment.apiUri}/users`);
  }

  getSigleUser(id: number): Observable<SigleDatResponse>{
    return this.http.get<SigleDatResponse>(`${environment.apiUri}/users/${id}`);
  }


}
