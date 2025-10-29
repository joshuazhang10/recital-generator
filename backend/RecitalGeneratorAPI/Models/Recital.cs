using System;
using System.Collections.Generic;

namespace RecitalGeneratorAPI.Models;

public partial class Recital
{
    public int RecitalId { get; set; }

    public string? UserId { get; set; }

    public string? Title { get; set; }

    public DateOnly? Date { get; set; }

    public virtual ICollection<RecitalPiece> RecitalPieces { get; set; } = new List<RecitalPiece>();
}
