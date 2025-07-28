using Microsoft.AspNetCore.Mvc;
using RecitalGeneratorAPI.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class RecitalsController : ControllerBase
{
    private readonly AppDbContext _context;

    public RecitalsController(AppDbContext context)
    {
        _context = context;
    }

    // Example GET endpoint
    [HttpGet]
    public async Task<IActionResult> GetRecitals()
    {
        var recitals = await _context.Recitals.ToListAsync();
        return Ok(recitals);
    }
}