import '../Styling/Create.css'
import '../Styling/StartButton.css'
import { useState, useEffect } from 'react'

export default function Create(props) {

    const [ quizData, setQuizData ] = useState({
        title: null,
        description: null,
        genre: {
            id: "",
            name: "",
            description: null
        },
        questions: []
    })
    const [ genres, setGenres ] = useState([])

    async function submitQuiz() {

        console.log("submitting!")

        const submitQuizData = await fetch("api/quizdata", {
            method: "POST",
            body: JSON.stringify({ ...quizData, 
                genre: { ...quizData.genre, id: (quizData.genre.id == "new_genre" ? null : parseInt(quizData.genre.id)) },
                questions: quizData.questions.map((q, index) => {
                    return({...q, id: null, answers: quizData.questions[index].answers.map(o => {
                        return({...o, id: null})
                    })})
                })
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        window.location.reload()
    }

    async function loadData() {
        const genreResponse = await fetch("api/genres")
        if (genreResponse.ok) {
            const data = await genreResponse.json();
            setGenres(data);
        }
    }

    function addQuestion() {
        setQuizData({ ...quizData, questions: [
            ...quizData.questions,
            {
                id : quizData.questions.length+1,
                title : "",
                answers : []
            }
        ]})
    }

    function updateQuestion(event, q) {
        setQuizData({...quizData, questions: quizData.questions.map(question => {
            if (question.id == q.id) {
                return({...q, title : event.target.value})
            } else {
                return question
            }
        })})
    }

    function updateNumberOfOptions(event, q) {
        setQuizData({ ...quizData, questions: quizData.questions.map(question => {
            if (question.id == q.id) {

                var optionsArray = new Array(parseInt(event.target.innerHTML)).fill().map((o, index) => {
                    return({
                        id: String.fromCharCode(index+97),
                        name: "",
                        correct: false
                    })
                })

                return({
                    ...q,
                    answers: optionsArray
                })
            } else {
                return question
            }
        })})
    }

    function updateOption(event, q, o) {
        setQuizData({ ...quizData, questions: quizData.questions.map(question => {
            if (question.id == q.id) {
                return({
                    ...q, 
                    answers : q.answers.map(option => {
                        if (option.id == o.id) {
                            return ({ ...option, name:event.target.value})
                        } else {
                            return option
                        }
                    })
                })
            } else {
                return question
            }
        })})
    }

    function updateCorrect(event, q, o) {
        setQuizData({ ...quizData, questions: quizData.questions.map(question => {
            if (question.id == q.id) {
                return({
                    ...q, 
                    answers : q.answers.map(option => {
                        if (option.id == o.id) {

                            return ({ ...option, correct:!(event.target.value==="true")})
                        } else {
                            return option
                        }
                    })
                })
            } else {
                return question
            }
        })})
    }

    function removeQuestion(event) {
        const index = parseInt(event.target.id.slice(-1))-1
        setQuizData(oldQuizData => {
            return ({
                ...oldQuizData,
                questions: oldQuizData.questions
                    .filter(q => q.id !== parseInt(event.target.id.slice(-1)))
                    .map((q, index) => ({...q, id: index+1}))
            })
        });
    }

    useEffect(() => {
        loadData()
    }, [])

    console.log(quizData)

    return (
        <form id="create-container">
            <table id="table">
                <tbody>
                    <tr>
                        <td><p className="side-header">Quiz Name:</p></td>
                        <td>
                            <input type="text" id="quiz-name" onChange={event => setQuizData({...quizData, title:event.target.value})} value={quizData.title}></input>
                        </td>
                    </tr>
                    <tr>
                        <td><p className="side-header">Genre:</p></td>
                        <td>
                            <select id="genre-selector" defaultValue="" onChange={event => setQuizData({...quizData, genre: { ...quizData.genre, id: event.target.value, name: genres[parseInt(event.target.value)]?.name}})} value={quizData.genre.id}>
                                <option value="" disabled></option>
                                <option value="new_genre" style={{color: "#fc774e"}}>+ Add Genre</option>
                                {
                                    genres.map(g => <option key={`genre-${g.id}`} value={`${g.id}`}>{g.name}</option>)
                                }
                            </select>
                        </td>
                    </tr>
                    {
                        quizData.genre.id == "new_genre" &&
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" id="new-genre" placeholder="Genre name" onChange={event => setQuizData({...quizData, genre: { ...quizData.genre, name: event.target.value }})} value={quizData.genre.name}></input>
                            </td>
                        </tr>
                    }
                    <tr>
                        <td><p className="side-header">Description:</p></td>
                        <td>
                            <textarea id="description" onChange={event => setQuizData({...quizData, description:event.target.value})} value={quizData.description}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td><p className="side-header">Cover Image:</p></td>
                        <td>
                            <input type="file" accept="image/*"></input>
                        </td>
                    </tr>
                    { false && <tr>
                        <td></td>
                        <td>
                            <img id="cover-image" src={quizData.imageUrl} alt="Cover Image" />
                        </td>
                    </tr> }
                </tbody>
            </table>

            { quizData.questions.length > 0 && <table id="questions">
                <thead>
                    <tr>
                        <th></th>
                        <th><p id="number-of-options">Question</p></th>    
                        <th><p id="number-of-options">Number of options</p></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        quizData.questions.map(q => {
                            return (
                                <>
                                <tr key={q.id}>
                                    <td><p id="question-id">{q.id}.</p></td>
                                    <td>
                                        <input 
                                            className="question"
                                            type="text" 
                                            id={`question-${q.id}`} 
                                            onChange={event => updateQuestion(event, q)}
                                            value={quizData.questions.filter(question => question.id==q.id)[0].title}
                                        />
                                    </td>
                                    <td>
                                        <div id="options-selector" value={quizData.questions.filter(question => question.id==q.id)[0].answers.length}>
                                            <div className="options-btn" 
                                                onClick={event => updateNumberOfOptions(event, q)}
                                            >2</div>
                                            <div className="options-btn"
                                                onClick={event => updateNumberOfOptions(event, q)}
                                            >3</div>
                                            <div className="options-btn"
                                                onClick={event => updateNumberOfOptions(event, q)}
                                            >4</div>
                                            <div className="options-btn"
                                                onClick={event => updateNumberOfOptions(event, q)}
                                            >5</div>
                                        </div>
                                    </td>
                                    <td>
                                        <img id={`x-icon-${q.id}`} className="x-icon" src="x-icon.svg" onClick={event => removeQuestion(event)}></img>
                                    </td>
                                </tr>
                                {
                                    q.answers.map(o => {
                                        return(
                                            <tr className="option-container" key={`${q.id}-${o.id}`}>
                                                <td></td>
                                                <td className="option">
                                                    <p id="option-id">{o.id})</p>
                                                    <input 
                                                        type="text" 
                                                        id={`question-${q.id}-option-${o.id}`} 
                                                        onChange={event => updateOption(event, q, o)}
                                                        value={quizData.questions.filter(question => question.id==q.id)[0].answers.filter(option => option.id==o.id)[0].name}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="correct">
                                                        <p>Correct: </p>
                                                        <input 
                                                            id={`question-${q.id}-option-${o.id}-correct`}
                                                            type="checkbox"
                                                            onChange={event => updateCorrect(event, q, o)}
                                                            value={quizData.questions.filter(question => question.id==q.id)[0].answers.filter(option => option.id==o.id)[0].correct}
                                                        ></input>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </>
                            )
                        })
                    }
                </tbody>
            </table> }

            <div className="btn" onClick={() => addQuestion()}>+ Add Question</div>

            <div className="btn" id="submit-btn" onClick={() => submitQuiz()}>Submit</div>

        </form>
    )
}