import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theater.model';
import { coordinateMap } from 'src/app/utilites/map/coordinates';

@Component({
  selector: 'app-movie-theaters-form',
  templateUrl: './movie-theaters-form.component.html',
  styleUrls: ['./movie-theaters-form.component.css']
})
export class MovieTheatersFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form:FormGroup

  @Input()
  model: movieTheatersDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  initialCoordinates: coordinateMap[] = [];

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',{
        validator: [Validators.required]
      }],
      latitude:['',{
        validator: [Validators.required]
      }],
      longtitude:['',{
        validator: [Validators.required]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longtitude: this.model.longtitude});
    }

  }


  saveChanges(){
      this.onSaveChanges.emit(this.form.value);
  }

  onSelectedLocation(coordinates: coordinateMap){
      this.form.patchValue(coordinates);
  }
}
