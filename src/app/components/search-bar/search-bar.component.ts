import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../api_key';
import {Movies} from '../../interfaces/movies';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public searchText: string;
  public Movies: Movies[];
  public breakPoint: number;
  constructor(public httpClient: HttpClient) {
    this.searchText = '';
  }

  ngOnInit() {
    this.httpClient.get('../../assets/movies.json').subscribe((data: any) => {
      this.Movies = data;
    });
    this.breakPoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  retrieveMovies = () => {
    return;
    console.log(this.searchText);
    if (this.searchText.length) {
      const text: string = this.searchText.trim();
      console.log(text);
      this.httpClient.get(API_URL + `s=${text.replace(' ', '+')}`)
        .subscribe((data: any) => {
          this.Movies = data.Search;
        });
    }
  }

}
