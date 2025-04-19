import { useState } from 'react'
import Home from './Home.jsx';
import Create from './Create.jsx';

function App() {

  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif] px-4">
      
      <a href="/"><img className="w-12 absolute inset-x-3 inset-y-3"src="home.svg" /></a>

      { currentPage == "home" && 
        <Home setCurrentPage={setCurrentPage} />
      }

      { currentPage == "create" &&
        <Create />
      }

      <footer className="mt-10 text-sm text-gray-500">
        &copy; 2025 The Kyle Morris Quiz App
      </footer>
    </div>
  );
}

export default App;