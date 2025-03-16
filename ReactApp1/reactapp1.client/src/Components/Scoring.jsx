import { useState, useEffect } from 'react'
import '../Styling/Quiz.css'
import '../Styling/StartButton.css'

export default function Scoring(props) {

    const [questions, setQuestions] = useState([]);

    async function loadQuestions() {
        const response = await fetch(`api/questions?quizId=${props.quiz.id}`)
        if (response.ok) {
            const data = await response.json();
            setQuestions(data);
        }
    }

    function score() {
        var correctAnswers = questions.map(q => q.answers.filter(a => a.correct)[0].id)
        console.log(correctAnswers)
        console.log(props.answers)
        for (var i=0; i<correctAnswers.length; i++) {
            if (correctAnswers[i] == props.answers[i+1])
                total++
        }
    }

    useEffect(() => {
        loadQuestions()
    }, [])

    var total = 0;
    if (questions.length > 0)
        score()

    return(
        <div id="question-container">
            <div id="message-container">
                <p>You scored:</p>
                <div id="score-container">
                    <div id="score" className={total/questions.length >= 0.7 ? "good-score" : total/questions.length > 0.4 ? "ok-score" : "bad-score"}>
                        <h1>{total}</h1><p>out of</p><h1>{questions.length}</h1>
                    </div>
                </div>
                <p id="message">...{total/questions.length >= 0.7 ? "not bad kid." : total/questions.length > 0.4 ? "mediocre at best." : "jesus wept."}</p>
                <a href="/" id="okbtn" className="btn">Ok</a>
            </div>
        </div>
    )

}