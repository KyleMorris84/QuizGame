using System.Text.Json.Serialization;

namespace ReactApp1.Server.Models
{
    public record Answer
    {
        public required string Name { get; set; }
        public int Id { get; set; }
        public required int QuestionId { get; set; }

        [JsonIgnore]
        public Question? Question { get; set; }
        public bool Correct { get; set; }
    }

    public record Question
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required int QuizId { get; set; }
        public Quiz? Quiz { get; set; }
        public List<Answer>? Answers { get; set; }
    }
}
