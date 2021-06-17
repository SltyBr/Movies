import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/imovie';
import { IMovies } from 'src/app/imovies';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public movies: IMovie[] = [];

  imageUrl = 'http://image.tmdb.org/t/p/w342'

  constructor( private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies()
        .subscribe( data => this.movies = data.results);
  }


}
