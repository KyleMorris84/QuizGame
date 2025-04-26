namespace ReactApp1.Server.Models.Repositories
{
    public interface IQuestionRepository
    {
        IEnumerable<Question> questions { get; }
        IEnumerable<Question>? GetQuestionsByQuizId(int quizId);
        Question AddQuestion(Question question);
        Answer AddAnswer(Answer answer);
    }
}
