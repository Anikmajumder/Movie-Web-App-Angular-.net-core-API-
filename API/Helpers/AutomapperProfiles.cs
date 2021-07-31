using System.Collections.Generic;
using API.DTOs;
using API.Entities;
using AutoMapper;
using NetTopologySuite.Geometries;

namespace API.Helpers
{
    public class AutomapperProfiles : Profile
    {
        public AutomapperProfiles(GeometryFactory geometryFactory)
        {
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>();
            
            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>()
                .ForMember(x=>x.Picture, options => options.Ignore());

            CreateMap<MovieTheater, MovieTheaterDTO>()
                .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Location.Y))
                .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Location.X));

            CreateMap<MovieTheaterCreationDTO, MovieTheater>()
                .ForMember(x => x.Location, x => x.MapFrom(dto =>
                geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));

            CreateMap<MovieCreationDTO,Movie>()
                .ForMember(x=>x.Poster, options=>options.Ignore())
                .ForMember(x=>x.MovieGenres, options=>options.MapFrom(MapMovieGenres))
                .ForMember(x=>x.MovieTheatersMovies, options=>options.MapFrom(MapMovieTheaters))
                .ForMember(x=>x.MoviesActors,options=>options.MapFrom(MoviesActors));
            
        }

        private List<MovieGenres> MapMovieGenres(MovieCreationDTO movieCreationDTO, Movie movie)
        {
            var result = new List<MovieGenres>();
            if(movieCreationDTO.GenresIds == null){return result;}
            foreach(var id in movieCreationDTO.GenresIds)
            {
                result.Add(new MovieGenres(){GenreId=id});
            }
            return result;
        }
        private List<MovieTheatersMovies> MapMovieTheaters(MovieCreationDTO movieCreationDTO, Movie movie){
            var result = new List<MovieTheatersMovies>();
            if(movieCreationDTO.MovieTheatersIds == null){
                return result;
            }
            foreach(var id in movieCreationDTO.MovieTheatersIds)
            {
                result.Add(new MovieTheatersMovies() { MovieTheaterId = id});
            }

            return result;
        }

        private List<MoviesActors> MoviesActors(MovieCreationDTO movieCreationDTO, Movie movie){
            var result = new List<MoviesActors>();
            if(movieCreationDTO.Actors == null){
                return result;
            }
            foreach(var actor in movieCreationDTO.Actors){
                result.Add(new MoviesActors() {ActorId = actor.Id, Character = actor.Character});
            }
            return result;
        }
    }
}