using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ActorDTO
    {
    
        [Required]
        [StringLength(120)]
        public string Name{get;set;}
 
        public DateTime DateOfBirth {get;set;}
        public string Biography {get;set;}
        public string Picture {get;set;}
        
    }
}