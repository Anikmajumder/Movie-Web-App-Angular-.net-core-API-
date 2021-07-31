import { Component, OnInit } from '@angular/core';
import { multipleSelectorModel } from 'src/app/utilites/multiple-selector/multiple-selector.model';
import { movieCreationDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  nonSelectedGenres: multipleSelectorModel[];
  nonSelectedMovieTheaters:multipleSelectorModel[];

  ngOnInit(): void {
    this.movieService.postGet().subscribe(response =>{
      this.nonSelectedGenres  = response.genres.map(genre=>{
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.nonSelectedMovieTheaters = response.movieTheaters.map(movietheater=>{
        return <multipleSelectorModel>{key: movietheater.id, value: movietheater.name}
      });
    });
  }
  saveChanges(movieCreationDTO: movieCreationDTO){
    console.log(movieCreationDTO);
  }
}
