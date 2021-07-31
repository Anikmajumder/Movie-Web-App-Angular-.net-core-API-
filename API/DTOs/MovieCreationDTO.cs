using System;
using System.Collections.Generic;
using API.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.DTOs
{
    public class MovieCreationDTO
    {
        public string Title{get;set;}
        public string Summary{get;set;}
        public string Trail{get;set;}
        public bool InTheaters{get;set;}
        public DateTime ReleaseDate{get;set;}
        public IFormFile Poster{get;set;}
        
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> GenresIds { get; set; }
        
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> MovieTheatersIds {get;set;}
        
        [ModelBinder(BinderType = typeof(TypeBinder<List<MoviesActorsCreationDTO>>))]
        public List<MoviesActorsCreationDTO> Actors {get;set;}

    }
}