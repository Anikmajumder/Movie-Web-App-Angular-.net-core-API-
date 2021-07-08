import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheater=[
      {
      title: 'spider man',
      releasedate: new Date(),
      price: 2323,
      poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg'
    },
     {title: 'Moana',
      releasedate: new Date('12-02-2020'),
      price: 2323,
      poster:'https://i.pinimg.com/originals/90/9e/12/909e129b8a22184b0f4c060f8a883e64.jpg'
  }];
  this.moviesFutureReleases=[];
  }
  moviesInTheater;
  moviesFutureReleases;


}
