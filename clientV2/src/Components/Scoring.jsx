import React from 'react';

function Scoring({ score, totalQuestions }) {
  // Calculate percentage score
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine message based on score
  let message = '';
  let messageColor = '';
  
  if (percentage >= 90) {
    message = "Excellent! You're a quiz master!";
    messageColor = "text-green-600";
  } else if (percentage >= 70) {
    message = "Great job! You know your stuff!";
    messageColor = "text-green-500";
  } else if (percentage >= 50) {
    message = "Not bad! You've got a good foundation.";
    messageColor = "text-blue-500";
  } else if (percentage >= 30) {
    message = "Keep learning! You're on your way.";
    messageColor = "text-yellow-600";
  } else {
    message = "Time for some more studying!";
    messageColor = "text-red-500";
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif] py-10 px-4">
      <div className="max-w-md w-full px-8 py-10 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Your Results</h1>
        
        <div className="mb-8">
          <div className="relative h-36 w-36 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold">{percentage}%</span>
            </div>
            <svg className="h-full w-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4263eb"
                strokeWidth="3"
                strokeDasharray={`${percentage}, 100`}
              />
            </svg>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-2">
            You got <span className="text-blue-600">{score}</span> out of <span className="text-gray-700">{totalQuestions}</span> correct
          </p>
          <p className={`${messageColor} text-lg font-medium`}>{message}</p>
        </div>
        
        <a href="/"><button
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
        >
          Back to Home
        </button></a>
      </div>
    </div>
  );
}

export default Scoring;