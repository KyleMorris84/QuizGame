import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../../config.js";

export default function Create() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [quizGenre, setQuizGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [showNewGenre, setShowNewGenre] = useState(false)
  const [newGenre, setNewGenre] = useState();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: '',
      optionCount: 2,
      options: [
        { id: 1, text: '', isCorrect: false },
        { id: 2, text: '', isCorrect: false }
      ]
    }
  ]);

  async function loadGenres() {
    const genreResponse = await fetch(`${API_BASE_URL}/api/genres`);
    if (genreResponse.ok) {
      const data = await genreResponse.json();
      setGenres(data);
    }
  }

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      title: '',
      optionCount: 2,
      options: [
        { id: 1, text: '', isCorrect: false },
        { id: 2, text: '', isCorrect: false }
      ]
    };
    setQuestions([...questions, newQuestion]);
  };

  const changeOptionCount = (questionIndex, count) => {
    const updatedQuestions = [...questions];
    const question = updatedQuestions[questionIndex];
    
    // Create new options array with desired count
    let newOptions = [...question.options];
    
    // If increasing, add new options
    if (count > question.optionCount) {
      for (let i = question.optionCount + 1; i <= count; i++) {
        newOptions.push({ id: i, text: '', isCorrect: false });
      }
    }
    // If decreasing, remove excess options
    else if (count < question.optionCount) {
      newOptions = newOptions.slice(0, count);
    }
    
    updatedQuestions[questionIndex].optionCount = count;
    updatedQuestions[questionIndex].options = newOptions;
    
    setQuestions(updatedQuestions);
  };

  const updateQuestionTitle = (questionIndex, title) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].title = title;
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions)
  }

  const updateOptionText = (questionIndex, optionIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = text;
    setQuestions(updatedQuestions);
  };

  const toggleCorrectOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].isCorrect = 
      !updatedQuestions[questionIndex].options[optionIndex].isCorrect;
    setQuestions(updatedQuestions);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const quizData = {
      title: quizTitle,
      description: quizDescription,
      genre: showNewGenre ? {name: newGenre} : {id: parseInt(quizGenre)},
      questions: questions.map(q => {
        return({
            title: q.title, 
            answers: q.options.map(o => {
                return({
                    name: o.text,
                    correct: o.isCorrect
                })
            })
        })
      })
    };

    await fetch(`${API_BASE_URL}/api/quizdata`, {
        method: "POST",
        body: JSON.stringify(quizData),
        headers: {
            "Content-Type": "application/json",
        }
    });

  };

  useEffect(() => {
    loadGenres();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-800 font-['Poppins',sans-serif] py-10 px-4">
      <div className="max-w-4xl w-200">
        <h1 className="text-3xl text-center font-bold text-gray-700 mb-6">Make a Quiz</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
          {/* Quiz Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Quiz Details</h2>
            
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600 mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600 mb-2">Description</label>
              <textarea
                id="description"
                value={quizDescription}
                onChange={(e) => setQuizDescription(e.target.value)}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="genre" className="block text-gray-600 mb-2">Genre</label>
              <div className="flex gap-5">
                <select
                    id="genre"
                    value={showNewGenre ? "" : quizGenre}
                    onChange={(e) => setQuizGenre(e.target.value)}
                    className="disabled:bg-gray-100 disabled:text-gray-300 outline-1 outline-solid outline-gray-300 border-r-transparent border-r-8 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={showNewGenre}
                >
                    <option value="" disabled>Select a genre</option>
                    {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
                <button 
                    type="button" 
                    onClick={() => setShowNewGenre(!showNewGenre)}
                    className={`px-2 py-2 min-w-35 rounded-md ${
                        showNewGenre 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}>
                        + New Genre
                    </button>
              </div>
            </div>
          </div>

          { showNewGenre &&
          <div className="mb-8">
              <label htmlFor="newGenre" className="block text-gray-600 mb-2">New Genre</label>
              <input
                type="text"
                id="newGenre"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
          </div>
          }
          
          {/* Questions Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Questions</h2>
            
            {questions.map((question, qIndex) => (
              <div key={question.id} className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-gray-600 mb-2">Question {qIndex + 1}</label>
                    <img onClick={(e) => removeQuestion(qIndex, e.target.value)}className="w-10 mb-2.5 rounded-md hover:bg-red-200" src="x-thin.svg" />
                  </div>
                  <input
                    type="text"
                    value={question.title}
                    onChange={(e) => updateQuestionTitle(qIndex, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your question"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Number of Options</label>
                  <div className="flex space-x-2">
                    {[2, 3, 4, 5].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => changeOptionCount(qIndex, count)}
                        className={`px-4 py-2 rounded-md ${
                          question.optionCount === count 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-gray-600">Options</label>
                  {question.options.map((option, oIndex) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={option.text}
                        onChange={(e) => updateOptionText(qIndex, oIndex, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Option ${oIndex + 1}`}
                        required
                      />
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`q${qIndex}-o${oIndex}-correct`}
                          checked={option.isCorrect}
                          onChange={() => toggleCorrectOption(qIndex, oIndex)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={`q${qIndex}-o${oIndex}-correct`} className="ml-2 text-sm text-gray-700">
                          Correct
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addQuestion}
              className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
            >
              <span className="mr-2">+</span> Add Question
            </button>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}