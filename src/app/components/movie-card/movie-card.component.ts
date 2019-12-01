import {Component, Input, OnInit} from '@angular/core';
import {Movies} from '../../interfaces/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  public movieData: Movies;
  constructor() {
    console.log(this.movieData);
  }

  ngOnInit() {
  }

}
