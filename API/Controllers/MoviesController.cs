using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        public readonly IPhotoService photoService;
        private string container = "movies";

        public  MoviesController(ApplicationDbContext context, IMapper mapper, IPhotoService photoService){
            this.context = context;
            this.mapper = mapper;
            this.photoService = photoService;
        }

        [HttpGet("PostGet")]
        public async Task<ActionResult<MoviePostGetDTO>> PostGet(){
            var movieTheaters = await context.MovieTheaters.OrderBy(x=>x.Name).ToListAsync();
            var genres = await context.Genres.OrderBy(x=>x.Name).ToListAsync();

            var movieTheaterDTO = mapper.Map<List<MovieTheaterDTO>>(movieTheaters);
            var genresDTO = mapper.Map<List<GenreDTO>>(genres);

            return new MoviePostGetDTO() {Genres = genresDTO, MovieTheaters = movieTheaterDTO };
        }
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] MovieCreationDTO movieCreationDTO){
            var movie = mapper.Map<Movie>(movieCreationDTO);
            if(movieCreationDTO.Poster != null){
                movie.Poster = await photoService.SaveFile(container,movieCreationDTO.Poster);
            }

            AnnotateActorOrder(movie);
            context.Add(movie);
            await context.SaveChangesAsync();
            return NoContent();
        } 

        private void AnnotateActorOrder(Movie movie){
            if(movie.MoviesActors != null){
                for(int i=0 ;i<movie.MoviesActors.Count;i++){
                    movie.MoviesActors[i].Order = i;
                }
            }
        }
    }
}