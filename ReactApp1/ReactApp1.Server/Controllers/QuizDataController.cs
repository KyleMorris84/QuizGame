using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Input;
using ReactApp1.Server.Models.Repositories;
namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/quizdata")]
    public class QuizDataController : ControllerBase
    {
        private IQuizRepository _quizRepository;
        private IGenreRepository _genreRepository;
        private IQuestionRepository _questionRepository;

        public QuizDataController(IQuizRepository quizRepository, IGenreRepository genreRepository, IQuestionRepository questionRepository)
        {
            _quizRepository = quizRepository;
            _genreRepository = genreRepository;
            _questionRepository = questionRepository;
        }

        [HttpPost]
        public IActionResult SubmitQuiz(InputQuiz quizData)
        {
            if (quizData.Genre.Id == null)
            {
                if (quizData.Genre.Name == null)
                {
                    return BadRequest("New genre is missing a name");
                }

                var genre = _genreRepository.AddGenre(
                    new Genre { Name = quizData.Genre.Name }
                );

                var quiz = _quizRepository.AddQuiz(new Quiz
                {
                    Name = quizData.Title,
                    Description = quizData.Description,
                    GenreId = genre.Id
                });

                foreach (var question in quizData.Questions)
                {
                    var newQuestion = _questionRepository.AddQuestion(new Question
                    {
                        Title = question.Title,
                        QuizId = quiz.Id
                    });

                    foreach (var answer in question.Answers)
                    {
                        _questionRepository.AddAnswer(new Answer
                        {
                            Name = answer.Name,
                            Correct = answer.Correct,
                            QuestionId = newQuestion.Id
                        });
                    }
                }
            }
            else
            {
                var genre = _genreRepository.GetGenreById((int)quizData.Genre.Id);

                if (genre == null) {
                    return NotFound($"Genre with id: {quizData.Genre.Id} not found");
                }

                var quiz = _quizRepository.AddQuiz(new Quiz
                {
                    Name = quizData.Title,
                    Description = quizData.Description,
                    GenreId = genre.Id
                });

                foreach (var question in quizData.Questions)
                {
                    var newQuestion = _questionRepository.AddQuestion(new Question
                    {
                        Title = question.Title,
                        QuizId = quiz.Id
                    });

                    foreach (var answer in question.Answers)
                    {
                        _questionRepository.AddAnswer(new Answer
                        {
                            Name = answer.Name,
                            Correct = answer.Correct,
                            QuestionId = newQuestion.Id
                        });
                    }
                }
            }
            return Ok(quizData);
        }
    }
}
