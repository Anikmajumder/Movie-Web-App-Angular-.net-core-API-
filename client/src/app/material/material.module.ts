import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule}from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule}from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule}from '@angular/material/select';
import{MatCheckboxModule}from '@angular/material/checkbox';
import{MatDatepickerModule}from '@angular/material/datepicker';
import{MatNativeDateModule}from '@angular/material/core';
import{MatTabsModule}from '@angular/material/tabs';




@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule

  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
