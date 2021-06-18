import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovies } from 'src/app/main-page/config/models/imovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private http: HttpClient
  ) { }

  private url: string = "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c"

  getMovies(): Observable<IMovies>{
    return this.http.get<IMovies>(this.url).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    const errorText = error.status === 0 ? 
      `An error occurred: ${error.error}` :  
      `Backend returned code ${error.status}, body was: ${error.error}`;

    console.error(errorText);

    return throwError(error);
  }
}
