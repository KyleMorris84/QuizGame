namespace ReactApp1.Server.Models.Repositories
{
    public interface IQuizRepository
    {
        IEnumerable<Quiz> Quizzes { get; }
        Quiz? GetQuizById(int id);
        IEnumerable<Quiz>? GetQuizzesByGenreId(int genreId);
        Quiz AddQuiz(Quiz quiz);
    }
}
