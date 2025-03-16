import { useState } from 'react'
import Banner from './Components/Banner.jsx'
import Home from './Components/StartButton.jsx'
import GenreSelection from './Components/GenreSelection.jsx';
import QuizSelection from './Components/QuizSelection.jsx'
import StartQuiz from './Components/StartQuiz.jsx'
import Quiz from './Components/Quiz.jsx'
import Scoring from './Components/Scoring.jsx'
import Create from './Components/Create.jsx'
import "./App.css"

export default function App() {

    const [gameState, setGameState] = useState({
        homePage: true,
        title: "Quiz Game"
    })

    const back = () => {
        if (gameState.quizPage) {
            setGameState({
                ...gameState,
                quizPage: false,
                quizStartPage: true
            })
        }
        else if (gameState.quizStartPage) {
            setGameState({
                ...gameState,
                quiz: null,
                title: gameState.genre,
                quizStartPage: false,
                quizSelectionPage: true
            })
        } else if (gameState.quizSelectionPage) {
            setGameState({
                ...gameState,
                quizSelectionPage: false,
                genrePage: true,
                title: "Genres"
            })
        } else if (gameState.genrePage) {
            setGameState({
                ...gameState,
                genrePage: false,
                homePage: true,
                title: "Quiz Game"
            })
        } else if (gameState.createPage) {
            setGameState({
                ...gameState,
                createPage: false,
                homePage: true,
                title: "Quiz Game"
            })
        }
    }

    return (
        <div>
            <Banner />

            <div id="container">

                <div id="nav">
                    <img id="back-arrow" src="Back_Arrow.svg" onClick={back}/>
                    <h2>{gameState.title}</h2>
                </div>
                
                <div id="content">
                    { 
                        gameState.homePage == true &&
                        <Home 
                            startGame={() => setGameState({
                                ...gameState,
                                homePage: false,
                                genrePage: true,
                                title: "Genres"
                            })}
                            createQuiz={() => setGameState({
                                ...gameState,
                                homePage: false,
                                createPage: true,
                                title: "Make a Quiz"
                            })}
                        />
                    }
                    {
                        gameState.genrePage == true && 
                        <GenreSelection 
                            selectGenre={genre => setGameState({
                                ...gameState,
                                genre: genre,
                                title: genre.name,
                                quizSelectionPage : true,
                                genrePage: false
                            })}
                        />
                    }
                    { 
                        gameState.quizSelectionPage == true &&
                        <QuizSelection 
                            selectQuiz={quiz => setGameState({
                                ...gameState,
                                quiz: quiz,
                                title: quiz.name,
                                quizStartPage: true,
                                quizSelectionPage: false
                            })} 
                            genre={gameState.genre}
                        />
                    }
                    {
                        gameState.quizStartPage == true &&
                        <StartQuiz
                            quiz={gameState.quiz}
                            startQuiz={() => setGameState({
                                ...gameState,
                                quizStartPage: false,
                                quizPage: true
                            })}
                        />
                    }
                    {
                        gameState.quizPage == true &&
                            <Quiz 
                                quiz={gameState.quiz} 
                                finishQuiz={(answers) => setGameState({
                                    ...gameState,
                                    answers: answers,
                                    quizPage: false,
                                    scorePage: true
                                })}
                            />
                    }
                    {
                        gameState.scorePage == true &&
                        <Scoring 
                            quiz={gameState.quiz} 
                            answers={gameState.answers}
                        />
                    }
                    {
                        gameState.createPage &&
                        <Create/>
                    }

                </div>
            </div>
            
        </div>
    );
}