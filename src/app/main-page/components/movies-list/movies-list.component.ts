import { ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMovie } from 'src/app/main-page/config/models/imovie';
import { MoviesService } from 'src/app/main-page/services/movies/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  public movies: IMovie[] = [];
  public totalPages!: number;
  private onDestroy$ = new Subject<void>();
  public pageNumber: number = 24;

  constructor( 
    private moviesService: MoviesService
  ) {}

  getMoviePosterPath(moviePosterPath: string): string {
    return `http://image.tmdb.org/t/p/w342${moviePosterPath}`;
  }

  getMoviesService(){
    this.moviesService
        .getMovies(this.pageNumber)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe( (moviesData)=>{
          this.movies = moviesData.results;
        });
  }

  trackByMovieId(index: number, movie: IMovie): number{
    return movie.id;
  }
  
  ngOnInit(): void {
    this.getMoviesService();
    this.moviesService.getMovies(this.pageNumber)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe( (moviesData)=>{
      this.totalPages = moviesData.total_pages;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
