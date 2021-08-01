import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formateDateFormDate } from '../utilites/utils';
import { movieCreationDTO, MoviePostGetDTO } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL+'/movies';

  public postGet(): Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(movieCreationDTO: movieCreationDTO){
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.post(this.apiURL, formData);
  }

  private BuildFormData(movie: movieCreationDTO): FormData{
    const formData= new FormData();

    formData.append('title', movie.title);
    formData.append('summary',movie.summary);
    formData.append('trail', movie.trailer);
    formData.append('inTheaters',String(movie.inTheaters));
    if(movie.releaseDate){
      formData.append('releaseDate', formateDateFormDate(movie.releaseDate));
    }
    if(movie.poster){
      formData.append('poster',movie.poster);
    }

    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('movieTheatersIds', JSON.stringify(movie.movieTheatersIds));
    formData.append('actors',JSON.stringify(movie.actors));

    return formData;

  }


}
