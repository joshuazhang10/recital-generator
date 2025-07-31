using Microsoft.AspNetCore.Mvc;
using RecitalGeneratorAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace RecitalGeneratorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecitalController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RecitalController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetRecitals()
        {
            var recitals = await _context.Recitals.ToListAsync();
            return Ok(recitals);
        }
    }
}