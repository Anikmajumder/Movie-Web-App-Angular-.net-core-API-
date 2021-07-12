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
