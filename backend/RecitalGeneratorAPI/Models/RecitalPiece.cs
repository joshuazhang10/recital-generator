using System;
using System.Collections.Generic;

namespace RecitalGeneratorAPI.Models;

public partial class RecitalPiece
{
    public int RecitalId { get; set; }
    public Recital? Recital { get; set; }

    public int PieceId { get; set; }
    public Piece? Piece { get; set; }
}
