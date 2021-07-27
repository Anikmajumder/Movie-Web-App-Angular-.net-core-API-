using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Genre> Genres{get; set;}
        public DbSet<Actor> Actors{get; set;}
        public DbSet<MovieTheater> MovieTheaters{get;set;}
    }
}