import {useState, useEffect} from 'react'
import { API_BASE_URL } from '../../config';

export default function Select({ setCurrentPage, setGlobalQuiz }) {

    const [genres, setGenres] = useState([])
    const [quizzes, setQuizzes] = useState([])
    const [genreId, setGenreId] = useState(-1);
    const [quiz, setQuiz] = useState("");

    async function loadGenres() {
        const genreResponse = await fetch(`${API_BASE_URL}/api/genres`);
        if (genreResponse.ok) {
            const data = await genreResponse.json();
            setGenres(data);
        }
    }

    async function loadQuizzes() {
        const quizResponse = await fetch(`${API_BASE_URL}/api/quizzes?genreId=${genreId}`);
        if (quizResponse.ok) {
            const data = await quizResponse.json();
            setQuizzes(data);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setGlobalQuiz(quiz)
        setCurrentPage("quiz")
    }

    useEffect(() => {
        loadGenres();
    }, []);

    useEffect(() => {
        loadQuizzes();
        setQuiz({ id:-1 });
    }, [genreId])

    return (
        <div className="min-h-screen bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif] py-10 px-4">
            <div className="max-w-4xl w-200 mx-auto">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h1 className="text-3xl font-bold text-gray-700 mb-6">Play a Quiz</h1>
                    <div className="mb-4">
                        <label htmlFor="genre" className="block text-gray-600 mb-2">Genre</label>
                        <select
                            id="genre"
                            value={genreId}
                            onChange={(e) => setGenreId(e.target.value)}
                            className="disabled:bg-gray-100 disabled:text-gray-300 outline-1 outline-solid outline-gray-300 border-r-transparent border-r-8 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value={-1} disabled>Select a genre</option>
                            {genres.map(g => (
                            <option key={g.id} value={g.id}>{g.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-10">
                        <label htmlFor="quiz" className="block text-gray-600 mb-2">Quiz</label>
                        <select
                            id="quiz"
                            value={quiz.id}
                            onChange={(e) => setQuiz(quizzes.filter(q=>q.id==e.target.value)[0])}
                            className="disabled:bg-gray-100 disabled:text-gray-300 outline-1 outline-solid outline-gray-300 border-r-transparent border-r-8 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value={-1} disabled>Select a quiz</option>
                            {quizzes.map(q => (
                            <option key={q.id} value={q.id}>{q.name}</option>
                            ))}
                        </select>
                    </div>
                    

                    { quiz.id >= 0  &&
                    <div className="flex flex-col items-center mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6 ">{ quiz.name }</h2>
                        <p className="stext-center mb-8">{ quiz.description }</p>
                        <button type="submit" className="w-xl py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300 hover:-translate-y-1">Play</button>
                    </div> }
                </form>
            </div>
        </div>
    )
}