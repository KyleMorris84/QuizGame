using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Repositories;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/questions")]
    public class QuestionController : ControllerBase
    {
        IQuestionRepository _questionRepository;

        public QuestionController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Question>> GetQuestionsByQuiz(int? quizId)
        {
            if (quizId == null)
            {
                return Ok(_questionRepository.questions);
            }

            var questions = _questionRepository.GetQuestionsByQuizId((int)quizId);
            if (questions.Any() == false)
            {
                return NotFound();
            }
            return Ok(questions);
        }
    }
}
