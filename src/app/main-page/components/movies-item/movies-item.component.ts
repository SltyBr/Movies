import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../config/models/imovie';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {

  movie!: IMovie;
  title!: string;
  releaseDate!: string;
  voteAverage!: number;
  popularity!: number;
  overview!: string;
  posterPath!: string;
  backdropPath!: string;

  red = 'red';

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovieById()
  }

  getActivatedRouter(): number{
    return this.activatedRoute.snapshot.params.id;
  }
  
  getMovieById(): void{
    this.moviesService.getMovieItem(this.getActivatedRouter())
        .subscribe(movie => {
          this.movie = movie;
          this.title = this.movie.title;
          this.releaseDate = this.movie.release_date;
          this.voteAverage = this.movie.vote_average;
          this.popularity = this.movie.popularity;
          this.overview = this.movie.overview;
          this.posterPath = this.movie.poster_path;
          this.backdropPath = this.movie.backdrop_path;});
  }

  getMoviePoster(moviePosterPath: string): string {
    return `http://image.tmdb.org/t/p/w342${moviePosterPath}`;
  }
  getMovieImageUrl(moviePath: string): string {
    return `url(http://image.tmdb.org/t/p/w342${moviePath})`;
  }

}
