import * as internal from "stream";
import { actorsMovieDTO } from "../actors/actors.model";
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
  actors: actorsMovieDTO[];
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
