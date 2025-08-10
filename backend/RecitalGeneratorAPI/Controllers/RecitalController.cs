using Microsoft.AspNetCore.Mvc;
using RecitalGeneratorAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

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
        [Authorize]
        [Route("get-recitals")]
        public async Task<IActionResult> GetRecitals()
        {
            var recitals = await _context.Recitals.ToListAsync();
            return Ok(recitals);
        }
    }
}