import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMovie } from 'src/app/imovie';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  public movies: IMovie[] = [];

  getMoviePosterPath(moviePosterPath: string): string {
    return `http://image.tmdb.org/t/p/w342${moviePosterPath}`;
  }

  trackByMovieId(index: number, movie: IMovie): number{
    return movie.id
  }

  constructor( 
    private moviesService: MoviesService,
    private onDestroy$: Subject<void>
  ) {}
  
  
  ngOnInit(): void {
    this.moviesService.getMovies()
        .pipe(takeUntil(this.onDestroy$))
        .subscribe( moviesData => this.movies = moviesData.results);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
