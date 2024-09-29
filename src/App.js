// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateQuiz from './components/CreateQuiz';
import BrowseQuizzes from './components/BrowseQuizzes';
import QuizDetails from './components/QuizDetails'; // Import the QuizDetails component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <h1>Quiz Maker</h1>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/quizzes" element={<BrowseQuizzes />} />
            {/* Add the route for quiz details */}
            <Route path="/quiz/:quizId" element={<QuizDetails />} />
          </Routes>
        </div>
        <div className="footer">
          <p>© 2024 Quiz Maker. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
};

export default App;
