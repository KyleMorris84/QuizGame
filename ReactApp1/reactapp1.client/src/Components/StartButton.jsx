import '../Styling/StartButton.css'

export default function Home(props) {
    return (
        <div className="btndiv">
            <div onClick={props.startGame} className="btn">Play a Quiz!</div>
            <div onClick={props.createQuiz} className="btn">Make a Quiz!</div>
        </div>
    )
}