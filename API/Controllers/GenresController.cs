using API.Entities;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {

        private readonly ApplicationDbContext context;

        private readonly ILogger<GenresController> logger;
        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context)
        {
            this.context = context;

            this.logger = logger;

        }

        [HttpGet] //api/genres
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        public async Task<ActionResult<List<Genre>>> Get()
        {

            logger.LogInformation("Getting all the genres");
            return await context.Genres.ToListAsync();
        }

        [HttpGet("{Id:int}")] //api/genres/example
        public ActionResult<Genre> Get(int Id)
        {


            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> post([FromBody] Genre genre)
        {

            context.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut]
        public ActionResult put([FromBody] Genre genre)
        {

            throw new NotImplementedException();

        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();

        }
    }
}