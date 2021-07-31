import * as internal from "stream";
import { genreDTO } from "../genres/genres.model";
import { movieTheatersDTO } from "../movie-theaters/movie-theaters-form/movie-theater.model";

export interface movieCreationDTO{
  title:string;
  summary:string;
  inTheaters: boolean,
  trailer: string;
  releaseDate: Date;
  poster: string;
  genresIds: number[];
  movieTheatersIds: number[];
}

export interface movieDTO{
  title:string;
  summary:string;
  inTheaters: boolean,
  trailer: string;
  releaseDate: Date;
  poster: string;
}

export interface MoviePostGetDTO
{
  genres: genreDTO[];
  movieTheaters: movieTheatersDTO[];

}
