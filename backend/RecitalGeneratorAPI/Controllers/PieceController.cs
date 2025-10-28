using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecitalGeneratorAPI.Data;

namespace RecitalGeneratorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PieceController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PieceController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        // [Authorize]
        [Route("get-pieces")]
        public async Task<IActionResult> GetPieces()
        {
            var pieces = await _context.Pieces.ToListAsync();
            return Ok(pieces);
        }
    }
}