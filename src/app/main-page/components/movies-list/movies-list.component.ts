import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
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
  public pageNumber: number = 1;
  private onDestroy$ = new Subject<void>();

  constructor( 
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        switchMap(queryParams => {
          this.pageNumber = queryParams.page ? +queryParams.page : 1;
          return this.moviesService.getMovies(queryParams.page);
        }),
        takeUntil(this.onDestroy$))
      .subscribe(moviesData => {
        this.movies = moviesData.results;
        this.totalPages = moviesData.total_pages;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getMoviePosterPath(moviePosterPath: string): string {
    return `http://image.tmdb.org/t/p/w342${moviePosterPath}`;
  }

  getMoviesService(page: number){
    this.router.navigate(['/movies'], {
      queryParams: {
        page
      },
      replaceUrl: true
    })
  }

  trackByMovieId(index: number, movie: IMovie): number{
    return movie.id;
  }
}
