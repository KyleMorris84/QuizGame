import '../Styling/Banner.css'
export default function Banner(props) {
    return (
        <header className="banner">
            <div className="content">
                <div className="icon">
                    <a href="/"><img src="quiz-icon-2.png" alt="Quiz Icon" /></a>
                </div>
                <div className="text">
                    <h1>The Kyle Morris House of Quizzing</h1>
                </div>
            </div>
        </header>
    )
}