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
      
      <a href="/"><img className="w-12 absolute inset-x-3 inset-y-4"src="home.svg" /></a>

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