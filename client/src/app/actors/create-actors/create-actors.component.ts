import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreationDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css']
})
export class CreateActorsComponent implements OnInit {

  constructor(private actorServices: ActorsService, private route: Router) { }

  ngOnInit(): void {
  }
  saveChanges( actorCreationDTO: actorCreationDTO){
    this.actorServices.create(actorCreationDTO).subscribe(()=>{
      this.route.navigate(['/actors']);
    });
  }

}
