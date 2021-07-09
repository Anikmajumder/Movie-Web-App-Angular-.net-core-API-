import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule}from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule}from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
