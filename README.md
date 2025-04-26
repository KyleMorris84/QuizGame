# Kyle Morris Quiz App

This is my quiz game. Enjoy. Live site is [here](https://quiz-game-liard-delta.vercel.app/).

Frontend is hosted with Vercel. Backend is hosted with Azure App Services.

## Runing Locally

Project is setup so that the backend and frontend are decoupled and must be run separately. After cloning, follow these steps to run:

### Backend
1. Open the `./QuizAPI/QuizAPI.sln` file in Visual Studio or JetBrains Ryder.
2. Run the HTTPS build profile
3. This will run the API on `https://localhost:7070`

### Frontend
1. Naviagte to `./clientV2` in the terminal
2. Run the following commands
```
npm install
npm run dev
```

## Tools / Technologies
- React.js
- C# with .NET9
  - ASP.NET Core for the API Functionality
  - EF Core as an ORM for the DB
- SQLite3 for the DB