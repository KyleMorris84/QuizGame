# Kyle Morris Quiz Game

This is my quiz game. Enjoy.
Backend is hosted with Azure App Services. Frontend is hosted on Vercel and can be viewed [here](https://quiz-game-liard-delta.vercel.app/)

## How to run

1. Clone the repo
2. Open the ReactApp1.sln in Visual Studio
3. You can run the solution from here

For development I choose to run the api from Visual Studio and the frontend from the VS Code Terminal. To do this:
1. Open `reactapp1.client` in Visual Studio Code.
2. Press Ctrl+' to open the terminal
3. Run `npm run dev` to run the frontend.
4. Then run the solution in Visual Studio as before and it should only run the backend.

## Tools used
List of tools used
- React.js
- C# .NET9
  - ASP.NET Core for the API Functionality
  - EF Core as an ORM for the DB
  - Swagger to test the API through a UI
- SQLite3 for the DB
