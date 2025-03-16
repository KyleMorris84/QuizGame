namespace ReactApp1.Server.Models.Repositories
{
    public class MockQuestionRepository : IQuestionRepository
    {
        private IEnumerable<Question> _questionList;

        public MockQuestionRepository()
        {
            _questionList = new List<Question>
            {
                new Question
                {
                    Id = 1,
                    Title = "Which movie won the Academy Award for Best Picture in 2010?",
                    QuizId = 1,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Avatar", QuestionId = 1 },
                        new Answer { Id = 2, Name = "The Hurt Locker", QuestionId = 1 },
                        new Answer { Id = 3, Name = "Inglourious Basterds", QuestionId = 1 },
                        new Answer { Id = 4, Name = "Up", QuestionId = 1 }
                    }
                },
                new Question
                {
                    Id = 2,
                    Title = "Which 2010 movie featured the dream-sharing technology and was directed by Christopher Nolan?",
                    QuizId = 1,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Inception", QuestionId = 2 },
                        new Answer { Id = 2, Name = "Shutter Island", QuestionId = 2 },
                        new Answer { Id = 3, Name = "The Social Network", QuestionId = 2 },
                        new Answer { Id = 4, Name = "Interstellar", QuestionId = 2 }
                    }
                },
                new Question
                {
                    Id = 3,
                    Title = "What animated film from 2010 was about a villain named Gru who becomes a father figure to three girls?",
                    QuizId = 1,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Toy Story 3", QuestionId = 3 },
                        new Answer { Id = 2, Name = "How to Train Your Dragon", QuestionId = 3 },
                        new Answer { Id = 3, Name = "Despicable Me", QuestionId = 3 },
                        new Answer { Id = 4, Name = "Tangled", QuestionId = 3 }
                    }
                },
                new Question
                {
                    Id = 4,
                    Title = "Who starred as Mark Zuckerberg in the 2010 film 'The Social Network'?",
                    QuizId = 1,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Andrew Garfield", QuestionId = 4 },
                        new Answer { Id = 2, Name = "Jesse Eisenberg", QuestionId = 4 },
                        new Answer { Id = 3, Name = "Armie Hammer", QuestionId = 4 },
                        new Answer { Id = 4, Name = "Joseph Gordon-Levitt", QuestionId = 4 }
                    }
                },
                new Question
                {
                    Id = 5,
                    Title = "Which 2010 movie was the third installment in the 'Toy Story' series?",
                    QuizId = 1,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Toy Story 3", QuestionId = 5 },
                        new Answer { Id = 2, Name = "Shrek Forever After", QuestionId = 5 },
                        new Answer { Id = 3, Name = "The Lego Movie", QuestionId = 5 },
                        new Answer { Id = 4, Name = "Cars 2", QuestionId = 5 }
                    }
                },
                new Question
                {
                    Id = 6,
                    Title = "What is the traditional craft of folding paper into intricate shapes without using glue or scissors called?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Quilling", QuestionId = 6 },
                        new Answer { Id = 2, Name = "Decoupage", QuestionId = 6 },
                        new Answer { Id = 3, Name = "Origami", QuestionId = 6 },
                        new Answer { Id = 4, Name = "Papier-mâché", QuestionId = 6 }
                    }
                },
                new Question
                {
                    Id = 7,
                    Title = "Which type of knot is most commonly used in macramé for creating patterns?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Square Knot", QuestionId = 7 },
                        new Answer { Id = 2, Name = "Slip Knot", QuestionId = 7 },
                        new Answer { Id = 3, Name = "Figure-Eight Knot", QuestionId = 7 },
                        new Answer { Id = 4, Name = "Bowline Knot", QuestionId = 7 }
                    }
                },
                new Question
                {
                    Id = 8,
                    Title = "What is the name of the crafting technique that involves rolling and shaping narrow strips of paper into decorative designs?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Marbling", QuestionId = 8 },
                        new Answer { Id = 2, Name = "Embossing", QuestionId = 8 },
                        new Answer { Id = 3, Name = "Scrapbooking", QuestionId = 8 },
                        new Answer { Id = 4, Name = "Quilling", QuestionId = 8 }
                    }
                },
                new Question
                {
                    Id = 9,
                    Title = "In weaving, what is the name of the set of threads that run vertically on a loom and form the foundation of the fabric?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Weft", QuestionId = 9 },
                        new Answer { Id = 2, Name = "Warp", QuestionId = 9 },
                        new Answer { Id = 3, Name = "Heddle", QuestionId = 9 },
                        new Answer { Id = 4, Name = "Reed", QuestionId = 9 }
                    }
                },
                new Question
                {
                    Id = 10,
                    Title = "What is the primary ingredient in the homemade crafting clay often referred to as 'salt dough'?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Flour", QuestionId = 10 },
                        new Answer { Id = 2, Name = "Cornstarch", QuestionId = 10 },
                        new Answer { Id = 3, Name = "Baking Powder", QuestionId = 10 },
                        new Answer { Id = 4, Name = "Gelatin", QuestionId = 10 }
                    }
                },
                new Question
                {
                    Id = 11,
                    Title = "Which type of paint is best known for its ability to adhere to almost any surface, including fabric, glass, and wood?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Oil Paint", QuestionId = 11 },
                        new Answer { Id = 2, Name = "Watercolor Paint", QuestionId = 11 },
                        new Answer { Id = 3, Name = "Acrylic Paint", QuestionId = 11 },
                        new Answer { Id = 4, Name = "Tempera Paint", QuestionId = 11 }
                    }
                },
                new Question
                {
                    Id = 12,
                    Title = "In knitting, what is the technique called when stitches are transferred to a different needle to create a pattern like cables?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Binding Off", QuestionId = 12 },
                        new Answer { Id = 2, Name = "Casting On", QuestionId = 12 },
                        new Answer { Id = 3, Name = "Blocking", QuestionId = 12 },
                        new Answer { Id = 4, Name = "Crossing", QuestionId = 12 }
                    }
                },
                new Question
                {
                    Id = 13,
                    Title = "What is the process of decorating objects by gluing colored paper or fabric to them and coating with layers of varnish?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Embossing", QuestionId = 13 },
                        new Answer { Id = 2, Name = "Decoupage", QuestionId = 13 },
                        new Answer { Id = 3, Name = "Collage", QuestionId = 13 },
                        new Answer { Id = 4, Name = "Stencil Work", QuestionId = 13 }
                    }
                },
                new Question
                {
                    Id = 14,
                    Title = "What type of craft involves the use of a 'drop spindle' or 'spinning wheel'?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Spinning Yarn", QuestionId = 14 },
                        new Answer { Id = 2, Name = "Basket Weaving", QuestionId = 14 },
                        new Answer { Id = 3, Name = "Knitting", QuestionId = 14 },
                        new Answer { Id = 4, Name = "Needle Felting", QuestionId = 14 }
                    }
                },
                new Question
                {
                    Id = 15,
                    Title = "Which fabric dyeing technique uses wax to resist dye on parts of the fabric to create patterns?",
                    QuizId = 3,
                    Answers = new List<Answer>()
                    {
                        new Answer { Id = 1, Name = "Tie-Dye", QuestionId = 15 },
                        new Answer { Id = 2, Name = "Shibori", QuestionId = 15 },
                        new Answer { Id = 3, Name = "Batik", QuestionId = 15 },
                        new Answer { Id = 4, Name = "Ikat", QuestionId = 15 }
                    }
                }
            };
        }

        public IEnumerable<Question> questions => _questionList;

        public void AddAnswer(Answer answer)
        {
            throw new NotImplementedException();
        }

        public void AddQuestion(Question question)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Question>? GetQuestionsByQuizId(int quizId)
        {
            throw new NotImplementedException();
        }

        Answer IQuestionRepository.AddAnswer(Answer answer)
        {
            throw new NotImplementedException();
        }

        Question IQuestionRepository.AddQuestion(Question question)
        {
            throw new NotImplementedException();
        }
    }
}
