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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    
        modelBuilder.Entity<ApplicationUser>().ToTable("users");

        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Piece>(entity =>
        {
            entity.HasKey(e => e.PieceId).HasName("PRIMARY");

            entity.ToTable("pieces");

            entity.Property(e => e.Composer).HasMaxLength(255);
            entity.Property(e => e.Duration).HasMaxLength(255);
            entity.Property(e => e.Notes).HasColumnType("text");
            entity.Property(e => e.Title).HasMaxLength(255);
        });

        modelBuilder.Entity<Recital>(entity =>
        {
            entity.HasKey(e => e.RecitalId).HasName("PRIMARY");

            entity.ToTable("recitals");

            entity.Property(e => e.Title).HasMaxLength(255);
            entity.Property(e => e.UserId).HasMaxLength(255);

            entity.HasMany(d => d.Pieces).WithMany(p => p.Recitals)
                .UsingEntity<Dictionary<string, object>>(
                    "RecitalPiece",
                    r => r.HasOne<Piece>().WithMany()
                        .HasForeignKey("PieceId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("recital_pieces_ibfk_2"),
                    l => l.HasOne<Recital>().WithMany()
                        .HasForeignKey("RecitalId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("recital_pieces_ibfk_1"),
                    j =>
                    {
                        j.HasKey("RecitalId", "PieceId")
                            .HasName("PRIMARY")
                            .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });
                        j.ToTable("recital_pieces");
                        j.HasIndex(new[] { "PieceId" }, "PieceId");
                    });
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
