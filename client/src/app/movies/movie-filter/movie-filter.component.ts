import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  genres=[{id:1, name:'Drama'}, {id:2, name:'Action'}];

  movies = [
    {title: 'Spider-man', poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
    {title: 'Moana', poster: 'https://i.pinimg.com/originals/90/9e/12/909e129b8a22184b0f4c060f8a883e64.jpg'},
    {title: 'Inception', poster: 'https://movieswithaplottwist.com/wp-content/uploads/2016/03/Inception-movie-poster.jpg'}
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges.subscribe(values =>{
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }
  clearForm(){
   this.form.reset();
  }
  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie=> movie.title.indexOf(values.title) !==-1);
    }
  }

}
