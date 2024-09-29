// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleCreateQuiz = () => {
    navigate('/create-quiz'); // Navigate to Create Quiz page
  };

  const handleBrowseQuizzes = () => {
    navigate('/quizzes'); // Navigate to Browse Quizzes page (make sure this route exists)
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to the Quiz Maker</h1>
      <div className="button-container">
        <button onClick={handleCreateQuiz} className="button">Create Quiz</button>
        <button onClick={handleBrowseQuizzes} className="button">Browse Quizzes</button>
      </div>
    </div>
  );
};

export default HomePage;
