using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;
using RecitalGeneratorAPI.Models;

namespace RecitalGeneratorAPI.Data;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Piece> Pieces { get; set; }

    public virtual DbSet<Recital> Recitals { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Piece>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("pieces");

            entity.Property(e => e.Composer).HasMaxLength(255);
            entity.Property(e => e.Duration).HasColumnType("time");
            entity.Property(e => e.Notes).HasColumnType("text");
            entity.Property(e => e.Title).HasMaxLength(255);
        });

        modelBuilder.Entity<Recital>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("recitals");

            entity.Property(e => e.Title).HasMaxLength(255);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("users");

            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.Password).HasMaxLength(100);
            entity.Property(e => e.Username).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
