using System.ComponentModel.DataAnnotations;

namespace RecitalGeneratorAPI.DTOs
{
    public class RecitalResponseDto
    {
        public int? RecitalId { get; set; }
        public string? Title { get; set; }
    }
}