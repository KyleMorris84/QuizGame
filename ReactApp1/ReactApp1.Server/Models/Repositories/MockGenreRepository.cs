
using System.Reflection.Metadata.Ecma335;

namespace ReactApp1.Server.Models.Repositories
{
    public class MockGenreRepository : IGenreRepository
    {
        private List<Genre> _genreList;

        public MockGenreRepository()
        {
            _genreList = new List<Genre>
            {
                new Genre { Id = 1, Name="Movies" },
                new Genre { Id = 2, Name="Literature" },
                new Genre { Id = 3, Name="Crafts" },
                new Genre { Id = 4, Name="Obscure Geography" },
                new Genre { Id = 5, Name="90s Cartoons" },
                new Genre { Id = 6, Name="Food Chemistry" },
                new Genre { Id = 7, Name="Mythical Creatures" },
                new Genre { Id = 8, Name="Corporate Logos" },
                new Genre { Id = 9, Name="Space Trivia" },
                new Genre { Id = 10, Name="Movie Quotes" },
                new Genre { Id = 11, Name="Historical Weapons" },
                new Genre { Id = 12, Name="Pop Music Lyrics" },
                new Genre { Id = 13, Name="Animal Behavior" }
            };
        }

        public IEnumerable<Genre> Genres => _genreList;

        public Genre? GetGenreByName(string name)
        {
            return _genreList.FirstOrDefault(g => g.Name == name);
        }

        public Genre? GetGenreById(int id)
        {
            throw new NotImplementedException();
        }

        public void AddGenre(Genre genre)
        {
            throw new NotImplementedException();
        }

        Genre IGenreRepository.AddGenre(Genre genre)
        {
            throw new NotImplementedException();
        }
    }
}
