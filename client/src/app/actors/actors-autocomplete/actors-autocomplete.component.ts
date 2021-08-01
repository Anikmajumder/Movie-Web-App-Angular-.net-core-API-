import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorsMovieDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor(private actorService: ActorsService) { }
  control: FormControl =new FormControl();


  @Input()
  slelectedActors: actorsMovieDTO[]=[];

  actorsToDisplay: actorsMovieDTO[]=[];

  columnsToDisplay = ['picture','name','character','actions']

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value=>{
      this.actorService.searchByName(value).subscribe(actors=>{
        this.actorsToDisplay = actors;
      });
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);

    this.control.patchValue('');

    if(this.slelectedActors.findIndex(x=>x.id == event.option.value.id) !== -1){
      return;
    }

    this.slelectedActors.push(event.option.value);
    if(this.table !== undefined){
      this.table.renderRows();
    }

  }
  remove(actor){
    const index = this.slelectedActors.findIndex(a=>a.name === actor.name);
    this.slelectedActors.splice(index,1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const privousIndex = this.slelectedActors.findIndex(actor=>actor === event.item.data);
    moveItemInArray(this.slelectedActors,privousIndex,event.currentIndex);
    this.table.renderRows();
  }
}
