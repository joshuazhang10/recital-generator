using System;
using System.Collections.Generic;

namespace RecitalGeneratorAPI.Models;

public partial class Recital
{
    public int? RecitalId { get; set; }

    public int? UserId { get; set; }

    public string? Title { get; set; }

    public DateOnly? Date { get; set; }
}
