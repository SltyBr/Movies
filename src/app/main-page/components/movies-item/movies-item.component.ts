import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMovie } from '../../config/models/imovie';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit, OnDestroy {
  movie!: IMovie;
  private onDestroy$ = new Subject<void>();

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovieById()
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getActivatedRouter(): number{
    return this.activatedRoute.snapshot.params.id;
  }
  
  getMovieById(): void{
    this.moviesService
        .getMovieItem(this.getActivatedRouter())
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(movie => this.movie = movie);
  }

  getMoviePoster(moviePosterPath: string): string {
    return `http://image.tmdb.org/t/p/w342${moviePosterPath}`;
  }

  getBackdropImageUrl(moviePath: string): string {
    return `url(http://image.tmdb.org/t/p/w342${moviePath})`;
  }
}
