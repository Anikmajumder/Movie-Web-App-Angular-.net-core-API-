import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  imageBase64: string;

  @Output()
  onImageSelected = new EventEmitter<File>();
  ngOnInit(): void {
  }

  @Input()
  urlCurrentImage: string;

  change(event){
    if(event.target.files.length>0){
      const file: File =event.target.files[0];
      toBase64(file).then((value:string)=>this.imageBase64=value);
      this.onImageSelected.emit(file);
      this.urlCurrentImage = null;// if user want to change image
    }

  }
}

