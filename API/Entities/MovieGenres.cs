namespace API.Entities
{
    public class MovieGenres
    {
        public int GenreId{get;set;}
        public int MovieId{get;set;}

        public Genre Genre{get;set;}
        public Movie Movie{get;set;}
    }
}