namespace ReactApp1.Server.Models.Repositories
{
    public class MockQuizRepository : IQuizRepository
    {
        private List<Quiz> _quizList;

        public MockQuizRepository(IGenreRepository genreRepository)
        {
            _quizList = new List<Quiz>
            {
                new Quiz {
                    Id = 1,
                    Name = "2010 In Movies",
                    Description = "Can you identify the movies that cinematically defined 2010?",
                    GenreId = 1,
                    Genre = genreRepository.GetGenreByName("Movies") ?? new Genre { Id = 0, Name = "Unclassified" }
                },
                new Quiz {
                    Id = 2,
                    Name = "Famous Books",
                    Description = "Can you name the authors of these literary classics?",
                    GenreId = 2,
                    Genre = genreRepository.GetGenreByName("Literature") ?? new Genre { Id = 0, Name = "Unclassified" }
                },
                new Quiz {
                    Id = 3,
                    Name = "DIY Crafts Trivia",
                    GenreId = 3,
                    Description = "Test your knowledge about popular and traditional crafts.",
                    Genre = genreRepository.GetGenreByName("Crafts") ?? new Genre { Id = 0, Name = "Unclassified" }
                },
                new Quiz {
                    Id = 4,
                    Name = "Sigma Balls",
                    GenreId = 4,
                    Description = "Can you identify the places that most people have never heard of?",
                    Genre = genreRepository.GetGenreByName("Obscure Geography") ?? new Genre { Id = 0, Name = "Unclassified" }
                },
                new Quiz {
                    Id = 5,
                    Name = "Classic Movie Quotes",
                    GenreId = 1,
                    Description = "Match the quote to the movie that made it famous.",
                    Genre = genreRepository.GetGenreByName("Movies") ?? new Genre { Id = 0, Name = "Unclassified" }
                }

            };
        }

        public IEnumerable<Quiz> Quizes => _quizList;

        IEnumerable<Quiz> IQuizRepository.Quizzes => throw new NotImplementedException();

        public Quiz? GetQuizByName(string name)
        {
            throw new NotImplementedException();
        }
        public IEnumerable<Quiz>? GetQuizzesByGenreId(int genreId)
        {
            throw new NotImplementedException();
        }

        public Quiz? GetQuizById(int id)
        {
            throw new NotImplementedException();
        }

        public void AddQuiz(Quiz quiz)
        {
            throw new NotImplementedException();
        }

        public void UpdateQuiz(Quiz quiz)
        {
            throw new NotImplementedException();
        }

        public void UpdateQuizImage(Quiz quiz, string imageUrl)
        {
            throw new NotImplementedException();
        }

        Quiz? IQuizRepository.GetQuizById(int id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Quiz>? IQuizRepository.GetQuizzesByGenreId(int genreId)
        {
            throw new NotImplementedException();
        }

        Quiz IQuizRepository.AddQuiz(Quiz quiz)
        {
            throw new NotImplementedException();
        }
    }
}
