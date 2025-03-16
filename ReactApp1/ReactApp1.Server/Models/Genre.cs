using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ReactApp1.Server.Models
{
    public record Genre
    {
        public int Id { get; set; }
        public required string Name { get; set; }

        [JsonIgnore]
        public IEnumerable<Quiz>? Quizzes { get; set; }
    }
}
