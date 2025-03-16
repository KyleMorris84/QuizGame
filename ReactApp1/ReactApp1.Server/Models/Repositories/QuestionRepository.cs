
using Microsoft.EntityFrameworkCore;

namespace ReactApp1.Server.Models.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private QuizDbContext _context;

        public IEnumerable<Question> questions => _context.Question;

        public QuestionRepository(QuizDbContext context)
        {
            _context = context;

        }

        public Question AddQuestion(Question question)
        {
            var newQuestion = _context.Add(question);
            _context.SaveChanges();
            return newQuestion.Entity;
        }

        public Answer AddAnswer(Answer answer)
        {
            var newAnswer = _context.Add(answer);
            _context.SaveChanges();
            return newAnswer.Entity;
        }

        public IEnumerable<Question> GetQuestionsByQuizId(int quizId)
        {
            var questions = _context.Question.Include(e => e.Answers);
            return questions.Where(q => q.QuizId == quizId).ToList();
        }
    }
}
