import "../Styling/StartButton.css"
import "../Styling/StartQuiz.css"

export default function StartQuiz(props) {

    return (
        <div id="quiz">
            <p>
                {props.quiz.description}
            </p>
            <div className="btn" id="startButton" onClick={() => props.startQuiz()}>Start Game</div>
        </div>
    )
}