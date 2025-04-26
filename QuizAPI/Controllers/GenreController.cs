using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Repositories;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/genres")]
    public class GenreController : ControllerBase
    {
        IGenreRepository _genreRepository;
        public GenreController(IGenreRepository genreRepository)
        {
            _genreRepository = genreRepository;
        }

        public ActionResult<IEnumerable<Genre>> GetAllGenres()
        {
            return Ok(_genreRepository.Genres);
        }
    }
}
