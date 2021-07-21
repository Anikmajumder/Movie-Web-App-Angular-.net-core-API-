using API.Entities;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System;

namespace API.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
        
        
        private readonly ILogger<GenresController> logger;
        public GenresController(ILogger<GenresController> logger)
        {
            
            this.logger = logger;
            
        }

        [HttpGet] //api/genres
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        public async Task<ActionResult<List<Genre>>> Get(){
            
            logger.LogInformation("Getting all the genres");
            return new List<Genre>(){new Genre(){Id=1, Name="Comedy"}};
        }

        [HttpGet("{Id:int}")] //api/genres/example
        public ActionResult<Genre> Get(int Id){
            
            
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult post([FromBody] Genre genre){
            
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult put([FromBody] Genre genre){
           
            throw new NotImplementedException();

        }

        [HttpDelete]
        public ActionResult Delete(){
          throw new NotImplementedException();
  
        }
    }
}