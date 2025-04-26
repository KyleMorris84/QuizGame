namespace ReactApp1.Server.Models.Input
{
    public class InputQuiz
    {
        public string Title { get; set; }
        public InputGenre Genre { get; set; }
        public string Description { get; set; }
        //public IFormFile CoverImg { get; set; }
        public IEnumerable<InputQuestion> Questions { get; set; }

    }
}
