import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovies } from 'src/app/main-page/config/models/imovies';
import { IMovie } from '../../config/models/imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private http: HttpClient
  ) { }

  private defaultUrl: string = "http://api.themoviedb.org/3/movie"

  private apiKey = "ebea8cfca72fdff8d2624ad7bbf78e4c"

  getMoviesByPageNumber(pageNumber: number): Observable<IMovies>{
    return this.http.get<IMovies>(`${this.defaultUrl}/now_playing?api_key=${this.apiKey}&page=${pageNumber}`).pipe(
      catchError(this.handleError)
    )
  }

  getMovieItem(movieId: number){
    return this.http.get<IMovie>(`${this.defaultUrl}/${movieId}?api_key=${this.apiKey}`).pipe(
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
