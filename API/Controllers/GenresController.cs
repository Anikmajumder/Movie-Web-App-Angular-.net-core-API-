using API.Entities;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
using AutoMapper;
using System.Linq;

namespace API.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {

        private readonly ApplicationDbContext context;

        private readonly ILogger<GenresController> logger;

        public readonly IMapper mapper;
        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

            this.logger = logger;

        }

        [HttpGet] //api/genres
        // [HttpGet("list")]
        // [HttpGet("/allgenres")]
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {

            logger.LogInformation("Getting all the genres");
            var genres = await context.Genres.OrderBy(x=> x.Name).ToListAsync();
            return mapper.Map<List<GenreDTO>>(genres);

        }

        [HttpGet("{id:int}", Name ="getGenre")] //api/genres/example
        public async Task<ActionResult<GenreDTO>> Get(int id)
        {
            var genre = await context.Genres.FirstOrDefaultAsync(x=>x.Id==id);
            
            if(genre == null){
                return NotFound();
            }
            return mapper.Map<GenreDTO>(genre);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {

            var genre = mapper.Map<Genre>(genreCreationDTO);
            context.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] GenreCreationDTO genreCreationDTO)
        {

            var genre = mapper.Map<Genre>(genreCreationDTO);
            genre.Id = id;
            context.Entry(genre).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();

        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var genre = await context.Genres.FirstOrDefaultAsync(x=>x.Id == id);
            if(genre == null){
                return NotFound();
            }

            context.Remove(genre);
            await context.SaveChangesAsync();
            return NoContent();

        }
    }
}