using System.ComponentModel.DataAnnotations;

namespace Trifork_project.Data
{
    public class Inventory
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Category { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Brand { get; set; } = string.Empty;

        [Required]
        [MaxLength(13)]
        public string Barcode { get; set; } = string.Empty;
    }
}
