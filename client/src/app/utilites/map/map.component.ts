import { Component, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent,marker, Marker, tileLayer } from 'leaflet';
import { EventEmitter } from '@angular/core';
import { coordinateMap } from './coordinates';





@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.layers= this.initialCoordinates.map(value=> marker([value.latitude,value.longtitude]));
  }
  @Input()
  initialCoordinates: coordinateMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinateMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular movie' })
    ],
    zoom: 10,
    center: latLng(23.87453613830371, 90.15380859375001)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    const   latitude = event.latlng.lat;
    const longtitude= event.latlng.lng;
    console.log({latitude,longtitude});
    this.layers=[];
    this.layers.push(marker([  latitude,longtitude]));
    this.onSelectedLocation.emit({  latitude,longtitude});
  }

}
