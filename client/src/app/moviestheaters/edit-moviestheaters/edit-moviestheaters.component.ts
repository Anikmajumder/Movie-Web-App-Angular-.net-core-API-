import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-moviestheaters',
  templateUrl: './edit-moviestheaters.component.html',
  styleUrls: ['./edit-moviestheaters.component.css']
})
export class EditMoviestheatersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
    });
  }

}
