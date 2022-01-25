import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${environment.apiUri2}/movies`);
  }

  saveMovie(movie: Movie):Observable<any>{
    return this.http.post(`${environment.apiUri2}/movies`, movie);
  }

  editMovie(id: string, movie: Movie):Observable<any>{
    return this.http.put(`${environment.apiUri2}/movies/${id}`, movie);
  }

  getSingleMovie(id: string): Observable<Movie>{
    return  this.http.get<Movie>(`${environment.apiUri2}/movies/${id}`);
  }

  deleteMovie(id: string): Observable<Movie>{
    return this.http.delete<Movie>(`${environment.apiUri2}/movies/${id}`);
  }

}
