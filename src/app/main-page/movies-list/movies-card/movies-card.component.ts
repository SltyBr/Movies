import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {

  @Input() poster_path: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
