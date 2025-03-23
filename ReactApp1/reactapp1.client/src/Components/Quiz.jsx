import { useState, useEffect } from 'react'
import '../Styling/Quiz.css'
import { API_BASE_URL } from "../../config.js";

export default function Quiz(props) {

    const [questions, setQuestions] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(1)

    const [answerChosen, setAnswerChosen] = useState(false);
    const [answers, setAnswers] = useState([]);

    async function loadQuestions() {
        const response = await fetch(`${API_BASE_URL}/api/questions?quizId=${props.quiz.id}`)
        if (response.ok) {
            const data = await response.json();
            setQuestions(data);
        }
    }

    function incrementQuestionNumber() {
        if (questionNumber < questions.length) {
            setAnswerChosen({id: answers[questionNumber+1], checked : true})
            setQuestionNumber(questionNumber+1)   
        }
    }

    function decrementQuestionNumber() {
        if (questionNumber > 1) {
            setAnswerChosen({id: answers[questionNumber-1], checked: true})
            setQuestionNumber(questionNumber-1)
        }
    }

    function updateAnswers(event) {
        setAnswerChosen({id: event.target.id, checked: true})

        setAnswers(oldAnswers => {
            oldAnswers[questionNumber] = event.target.id
            return oldAnswers
        })
    }

    useEffect(() => {
        loadQuestions()
    }, [])

    return (
        <div id="question-container">
            { questions.length > 0 && <p id="title">{questionNumber}. {questions[questionNumber-1].title}</p> }
            <form onSubmit={(event) => {
                event.preventDefault()
                props.finishQuiz(answers)
            }}>
                { questions.length > 0 && questions[questionNumber-1].answers.map(a => {
                    return (
                        <div key={a.id} className="quiz">
                            <input id={a.id} name="q" type="radio" onChange={updateAnswers} checked={answerChosen.id == a.id ? answerChosen.checked : false} />
                            <p>{a.name}</p>
                        </div>
                    )
                })}
                <div className="prev-next-buttons">
                    <div className="btn" onClick={() => decrementQuestionNumber()}>
                        Previous
                    </div>
                    { 
                        questionNumber < questions.length
                            ? <div className="btn" onClick={() => incrementQuestionNumber()}>Next</div>
                            : <input type="submit" className="btn" value="Submit" />
                    }
                </div>
            </form>
        </div>
    )

}