namespace ReactApp1.Server.Models.Repositories
{
    public interface IGenreRepository
    {
        IEnumerable<Genre> Genres { get; }
        Genre? GetGenreByName(string name);
        Genre? GetGenreById(int id);
        Genre AddGenre(Genre genre);
    }
}
