using Microsoft.AspNetCore.Mvc;
using RecitalGeneratorAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using RecitalGeneratorAPI.Models;
using System.Security.Claims;
using RecitalGeneratorAPI.DTOs;

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

        [HttpGet]
        [Authorize]
        [Route("get-recital")]
        public async Task<IActionResult> GetRecital([FromBody] RecitalResponseDto dto)
        {
            var recital = await _context.Recitals.FindAsync(dto.RecitalId);

            if (recital == null)
            {
                return NotFound();
            }
            return Ok(recital);
        }

        [HttpPost]
        [Authorize]
        [Route("create-recital")]
        public async Task<IActionResult> CreateRecital([FromBody] RecitalResponseDto dto)
        {
            var recital = new Recital
            {
                Title = dto.Title,
                UserId = User.FindFirstValue(ClaimTypes.NameIdentifier),
                Date = DateOnly.FromDateTime(DateTime.Now)
            };

            _context.Recitals.Add(recital);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRecital), new { id = recital.RecitalId }, recital);
        }
    }
}