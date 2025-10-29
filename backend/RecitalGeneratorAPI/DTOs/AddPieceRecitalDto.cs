using System.ComponentModel.DataAnnotations;

namespace RecitalGeneratorAPI.DTOs
{
    public class AddPieceRecitalDto
    {
        [Required]
        public int RecitalId { get; set; }
        [Required]
        public int PieceId { get; set; }
    }
}