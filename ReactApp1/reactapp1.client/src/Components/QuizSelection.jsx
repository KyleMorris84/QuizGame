import { useState, useEffect } from 'react'
import '../Styling/StartButton.css'

export default function QuizSelection(props) {

    const [quizzes, setQuizzes] = useState([]);

    async function loadQuizzes() {
        const response = await fetch(`api/quizzes?genreId=${props.genre.id}`)
        if (response.ok) {
            const data = await response.json();
            setQuizzes(data);
        }
    }

    useEffect(() => {
        loadQuizzes()
    }, [])

    return (
        <div className="btndiv">
            { quizzes.length > 0 
                ? quizzes.map(q => <div key={q.id} className="btn" onClick={() => props.selectQuiz(q)}>{q.name}</div>)
                : <p>Nothing yet...</p>
            }
        </div>
    )
}