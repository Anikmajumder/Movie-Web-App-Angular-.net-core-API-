import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from 'src/app/movie-theaters/movie-theaters-form/movie-theater.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-moviestheaters',
  templateUrl: './edit-moviestheaters.component.html',
  styleUrls: ['./edit-moviestheaters.component.css']
})
export class EditMoviestheatersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private movieTheaterservice: MovieTheatersService, private route: Router) { }

  model: movieTheatersDTO;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        this.movieTheaterservice.getById(params.id).subscribe(movieTheater=> this.model = movieTheater );
    });
  }
  saveChanges(movieTheater: movieTheatersCreationDTO){
      this.movieTheaterservice.edit(this.model.id, movieTheater).subscribe(()=>
      this.route.navigate(['/movietheaters']))
  }


}
