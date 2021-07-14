import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'protractor';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  model: movieDTO ={title:'Spider Man', inTheaters:true,summary:'whatever',
                    releaseDate: new Date(), trailer: 'ABCD',poster:'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX67_CR0,0,67,98_AL_.jpg'}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
    });
  }
saveChanges(movieCreationDTO: movieCreationDTO)
{}

}
