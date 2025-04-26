namespace ReactApp1.Server.Models.Repositories
{
    public class QuizRepository : IQuizRepository
    {
        private QuizDbContext _context;
        public QuizRepository(QuizDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Quiz> Quizzes => _context.Quiz;

        public Quiz AddQuiz(Quiz quiz)
        {
            var newQuiz = _context.Quiz.Add(quiz);
            _context.SaveChanges();
            return newQuiz.Entity;
        }

        public Quiz? GetQuizById(int id)
        {
            return _context.Quiz.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Quiz>? GetQuizzesByGenreId(int genreId)
        {
            return _context.Quiz.Where(q => q.GenreId == genreId);
        }
    }
}
