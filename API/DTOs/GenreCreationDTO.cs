using System.ComponentModel.DataAnnotations;
using API.Validations;

namespace API.DTOs
{
    public class GenreCreationDTO
    {
        public int Id{get;set;}
        [Required(ErrorMessage ="The field with name {0} is required")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string Name{get;set;}
        
    }
}