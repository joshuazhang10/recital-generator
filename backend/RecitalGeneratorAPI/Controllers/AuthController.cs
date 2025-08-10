using Microsoft.AspNetCore.Mvc;
using RecitalGeneratorAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using RecitalGeneratorAPI.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using RecitalGeneratorAPI.DTOs;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace RecitalGeneratorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public AuthController(UserManager<ApplicationUser> userManager, AppDbContext context, IConfiguration config)
        {
            _context = context;
            _userManager = userManager;
            _config = config;
        }

        [HttpPost]
        [Route("register-user")]
        public async Task<IActionResult> Register(RegisterDto model)
        {
            var existingUser = await _userManager.FindByEmailAsync(model.Email);
            if (existingUser != null)
            {
                return BadRequest("ApplicationUser already exists"); // Duplicate usernames are not allowed by default
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser
            {
                UserName = model.Username,
                Email = model.Email,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);
                return BadRequest(new { Errors = errors });
            }

            return Ok("ApplicationUser registered successfully.");
        }

        [HttpPost]
        [Route("login-user")]
        public async Task<IActionResult> Login(LoginDto model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return BadRequest("No user with this email was found.");
            }
            bool isValidPassword = await _userManager.CheckPasswordAsync(user, model.Password);
            if (!isValidPassword)
            {
                return Unauthorized();
            }

            var token = GenerateAccessToken(user.UserName, user.Email);

            var response = new
            {
                AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                Message = "ApplicationUser logged in successfully."
            }; 
            return Ok(response);
        }

        private JwtSecurityToken GenerateAccessToken(string userName, string email)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, userName),
                new Claim(ClaimTypes.Email, email)
            };

            var token = new JwtSecurityToken(
                issuer: _config["Authentication:Schemes:Bearer:ValidIssuer"],
                audience: _config["Authentication:Schemes:Bearer:ValidAudiences:0"], // 0 -> First valid audience
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Authentication:Schemes:Bearer:IssuerSigningKey"])),
                    SecurityAlgorithms.HmacSha256
                )
            );

            return token;
        }
    }
}