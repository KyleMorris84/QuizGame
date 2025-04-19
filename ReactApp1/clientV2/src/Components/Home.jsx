export default function Home({ setCurrentPage }) {
    return (
        <div className="max-w-xl w-full px-8 py-10 bg-white rounded-xl shadow-lg">
            <div className="text-center">
                <div className="flex gap-3 mb-3 items-center justify-center">
                    <img className="w-8 h-8" src="/pencil.png"></img>
                    <h1 className="text-4xl font-bold text-gray-700 ">Kyle Morris Quiz App</h1>
                    <img className="w-8 h-8" src="/pencil.png"></img>
                </div>
                <p className="text-gray-500 mb-10 font-light">Test your knowledge or create your own quiz</p>
                
                <div className="flex flex-col space-y-5">
                    <button onClick={() => setCurrentPage("select")} className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300 hover:-translate-y-1">
                        Play a Quiz
                    </button>
                    <button onClick={() => setCurrentPage("create")} className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md transition duration-300 hover:-translate-y-1">
                        Make a Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}