using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Repositories;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/quizzes")]
    
    public class QuizController : ControllerBase
    {
        IQuizRepository _quizRepository;
        IGenreRepository _genreRepository;
        public QuizController(IQuizRepository quizRepository, IGenreRepository genreRepository)
        {
            _quizRepository = quizRepository;
            _genreRepository = genreRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Quiz>> GetQuizzesByGenre(int genreId)
        {
            return Ok(_quizRepository.GetQuizzesByGenreId(genreId));
        }
    }
}
