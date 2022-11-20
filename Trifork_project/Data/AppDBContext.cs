using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;
using DbContext = Microsoft.EntityFrameworkCore.DbContext;

namespace Trifork_project.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>().HasData(
                new Post { PostId = 1, Category = "Chocolate", Brand = "Marabou", Barcode="123443211245" },
                new Post { PostId = 2, Category = "Candy", Brand = "Haribo", Barcode = "1234567890123" },
                new Post { PostId = 3, Category = "Bread", Brand = "Schulstad", Barcode = "8901231234567" },
                new Post { PostId = 4, Category = "Icecream", Brand = "Ben & Jerry's", Barcode = "1234568977972" },
                new Post { PostId = 5, Category = "Shampoo", Brand = "Head & Shoulders", Barcode = "4388893289121" }
            );
        }
    }    
}
