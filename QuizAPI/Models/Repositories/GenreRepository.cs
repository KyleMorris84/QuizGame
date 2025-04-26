namespace ReactApp1.Server.Models.Repositories
{
    public class GenreRepository : IGenreRepository
    {
        private QuizDbContext _context;
        public GenreRepository(QuizDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Genre> Genres => _context.Genre;

        public Genre AddGenre(Genre genre)
        {
            var outputGenre = _context.Add(genre);
            _context.SaveChanges();
            return outputGenre.Entity;
        }

        public Genre? GetGenreById(int id)
        {
            return _context.Genre.Where(g => g.Id == id).FirstOrDefault();
        }

        public Genre? GetGenreByName(string name)
        {
            return _context.Genre.Where(g => g.Name == name).FirstOrDefault();
        }
    }
}
