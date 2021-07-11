import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from 'src/app/movie-theaters/movie-theaters-form/movie-theater.model';

@Component({
  selector: 'app-edit-moviestheaters',
  templateUrl: './edit-moviestheaters.component.html',
  styleUrls: ['./edit-moviestheaters.component.css']
})
export class EditMoviestheatersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheatersDTO = {name: 'Blockbuster Cinemas', latitude: 23.81432515679727, longtitude: 90.42413771144312};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

    });
  }
  saveChanges(movieTheater: movieTheatersCreationDTO){

  }

}
