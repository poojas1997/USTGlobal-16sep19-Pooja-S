import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    selectedcars;
    movies = [{
      imgurl : 'https://m.mediaamazon.com/images/M/MV5BZGI5YTFhN2ItMjhlOC00NzlmLTgzM2EtZWEyNmY5NmMxYWNmXkEyXkFqcGdeQXVyNTE0NDY5Njc@._V1_SX300.jpg',
      name : 'milana'
    }];

    constructor( ) {
    }

     


  ngOnInit() {
  }

  sendMovie(movie){
    console.log(movie);
    this.selectedcars = movie;
  }

}
