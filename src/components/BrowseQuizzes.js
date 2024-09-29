// src/components/BrowseQuizzes.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BrowseQuizzes.css';

const BrowseQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Load quizzes from local storage when the component mounts
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);
  }, []);

  return (
    <div className="browse-quizzes-container">
      <h2>Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available. Create a new quiz!</p>
      ) : (
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index} className="quiz-item">
              <h3>{quiz.title}</h3>
              <p>{quiz.questions.length} questions</p>
              {/* Link to QuizDetails using the quiz index as the identifier */}
              <Link to={`/quiz/${index}`} className="view-quiz-button">
                View Quiz
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrowseQuizzes;
