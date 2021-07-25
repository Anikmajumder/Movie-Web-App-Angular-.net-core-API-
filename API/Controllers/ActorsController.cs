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
    [Route("api/actors")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        public readonly ApplicationDbContext context;
        public readonly IMapper mapper;
        public readonly IPhotoService photoService;
        private readonly string containerName = "actors"; 
        public ActorsController(ApplicationDbContext context, IMapper mapper, IPhotoService photoService)
        {
            this.context = context;
            this.mapper = mapper;
            this.photoService = photoService;

        }

       [HttpGet]
        public async Task<ActionResult<List<ActorDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable = context.Actors.AsQueryable();
            await HttpContext.InsertParametersPaginationInHeader(queryable);
            var actors = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<ActorDTO>>(actors);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ActorDTO>> Get(int id){
            var actor = await context.Actors.FirstOrDefaultAsync(x=>x.Id == id);
            if(actor == null){
                return NotFound();
            }
            return mapper.Map<ActorDTO>(actor);

        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] ActorCreationDTO actorCreationDTO)
        {
            var actor = mapper.Map<Actor>(actorCreationDTO);

            if (actorCreationDTO.Picture != null)
            {
                actor.Picture = await photoService.SaveFile(containerName, actorCreationDTO.Picture);
            }

            context.Add(actor);
            await context.SaveChangesAsync();
            return NoContent();
        }

        
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromForm] ActorCreationDTO actorCreationDTO){
           var actor = await context.Actors.FirstOrDefaultAsync(x=>x.Id == id);

           if(actor == null){
               return NotFound();
           }
           actor = mapper.Map(actorCreationDTO, actor);
           if(actorCreationDTO.Picture != null){
               actor.Picture = await photoService.EditFile(containerName, actorCreationDTO.Picture,actor.Picture);
           }
           await context.SaveChangesAsync();
           return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id){
            var actor = await context.Actors.FirstOrDefaultAsync(x=>x.Id == id);
            
            if(actor == null){
                return NotFound();
            }

            context.Remove(actor);
            await context.SaveChangesAsync();
            await photoService.DeleteFile(actor.Picture, containerName);
            return NoContent();
        }
    }
}