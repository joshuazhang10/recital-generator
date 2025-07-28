using System;
using System.Collections.Generic;

namespace RecitalGeneratorAPI.Models;

public partial class Piece
{
    public int? PieceId { get; set; }

    public string? Title { get; set; }

    public string? Composer { get; set; }

    public TimeOnly? Duration { get; set; }

    public string? Notes { get; set; }
}
