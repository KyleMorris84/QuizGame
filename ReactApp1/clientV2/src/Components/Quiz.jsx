import React, { useState, useEffect } from 'react';
import Scoring from './Scoring';
import { API_BASE_URL } from '../../config';

function Quiz({ quiz }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/questions?quizId=${quiz.id}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch questions: ${response.status}`);
        }
        
        const data = await response.json();
        setQuestions(data);
        
        // Initialize answers object with empty selections
        const initialAnswers = {};
        data.forEach(question => {
          initialAnswers[question.id] = null;
        });
        setAnswers(initialAnswers);
        
      } catch (err) {
        setError(err.message);
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuestions();
  }, [quiz.id]);
  
  const handleAnswerSelect = (questionId, answerId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate score
    let correctCount = 0;
    
    questions.forEach(question => {
      const selectedAnswerId = answers[question.id];
      if (selectedAnswerId) {
        const correctAnswer = question.answers.find(answer => answer.correct);
        if (correctAnswer && selectedAnswerId === correctAnswer.id) {
          correctCount++;
        }
      }
    });
    
    setScore(correctCount);
    setSubmitted(true);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif]">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading quiz questions...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif]">
        <div className="max-w-md w-full px-8 py-10 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Quiz</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <a href="/"><button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
          >
            Return to Home
          </button></a>
        </div>
      </div>
    );
  }
  
  if (submitted) {
    return <Scoring score={score} totalQuestions={questions.length} />;
  }
  
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">{quiz.name}</h1>
          <p className="text-gray-500 mb-8">{quiz.description}</p>
          
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={question.id} className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-medium text-gray-700 mb-4">
                  {index + 1}. {question.title}
                </h3>
                
                <div className="space-y-3">
                  {question.answers.map(answer => (
                    <div key={answer.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`q${question.id}-a${answer.id}`}
                        name={`question-${question.id}`}
                        value={answer.id}
                        checked={answers[question.id] === answer.id}
                        onChange={() => handleAnswerSelect(question.id, answer.id)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <label 
                        htmlFor={`q${question.id}-a${answer.id}`}
                        className="ml-3 text-gray-700 cursor-pointer"
                      >
                        {answer.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="mt-8 flex justify-between">
              <a href="/"><button
                type="button"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg shadow-md transition duration-300"
              >
                Cancel
              </button></a>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
              >
                Submit Answers
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Quiz;