import { useState } from 'react'
import Home from './Home.jsx';
import Create from './Create.jsx';
import Select from './Select.jsx';
import Quiz from './Quiz.jsx';

function App() {

  const [currentPage, setCurrentPage] = useState("home")
  const [quiz, setQuiz] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif]">
      
      <a href="/">
        <button
          className="fixed top-4 left-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
          aria-label="Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
      </a>

      { currentPage == "home" && 
        <Home setCurrentPage={setCurrentPage} />
      }

      { currentPage == "create" &&
        <Create />
      }

      { currentPage == "select" &&
        <Select 
          setCurrentPage={setCurrentPage} 
          setGlobalQuiz={setQuiz}
        />
      }

      { currentPage == "quiz" &&
        <Quiz quiz={quiz} />
      }

      <footer className="mt-5 mb-5 text-sm text-gray-500">
        &copy; 2025 The Kyle Morris Quiz App
      </footer>
    </div>
  );
}

export default App;