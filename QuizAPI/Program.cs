using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Models;
using ReactApp1.Server.Models.Repositories;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var connectionString = "Data Source=" + 
    Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "AppData", "quiz-db.db");

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins(
                              "https://quiz-game-liard-delta.vercel.app",
                              "http://localhost:5173",
                              "http://localhost:5174"
                          )
                            .AllowAnyHeader();
                      });
});
builder.Services.AddDbContext<QuizDbContext>(options =>
    options.UseSqlite(connectionString));
builder.Services.AddControllers();
builder.Services.AddScoped<IGenreRepository, GenreRepository>();
builder.Services.AddScoped<IQuizRepository, QuizRepository>();
builder.Services.AddScoped<IQuestionRepository, QuestionRepository>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();
app.MapControllers();

app.Run();
