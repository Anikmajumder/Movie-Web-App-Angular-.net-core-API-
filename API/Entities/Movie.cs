using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 75)]
        [Required]
        public string Title{get;set;}
        public string Summary{get;set;}
        public string Trail{get;set;}
        public bool InTheaters{get;set;}
        public DateTime ReleaseDate{get;set;}
        public string Poster{get;set;}

        public List<MovieGenres> MovieGenres{get;set;}
        public List<MovieTheatersMovies> MovieTheatersMovies{get;set;}
        public List<MoviesActors> MoviesActors{get;set;}
    }
}