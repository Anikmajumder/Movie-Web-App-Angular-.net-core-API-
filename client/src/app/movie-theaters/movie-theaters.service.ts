import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { movieTheatersCreationDTO } from './movie-theaters-form/movie-theater.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL+"/movieTheaters";

  public create(movieTheatersDTO: movieTheatersCreationDTO){
    return this.http.post(this.apiURL,movieTheatersDTO);
  }
}
