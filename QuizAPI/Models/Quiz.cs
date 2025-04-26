using System.Text.Json.Serialization;

namespace ReactApp1.Server.Models
{
    public record Quiz
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public int GenreId { get; set; }
        public Genre? Genre { get; set; }
        public string? ImageURL { get; set; }

        [JsonIgnore]
        public IEnumerable<Question>? Questions { get; set; }
        
    }
}
