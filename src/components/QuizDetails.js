// src/components/QuizDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
const QuizDetails = () => {
  const { quizId } = useParams(); // Get the quiz ID from the URL params
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || []; // Retrieve stored quizzes
  const quiz = quizzes[quizId]; // Select the quiz based on the ID

  if (!quiz) {
    return <p>Quiz not found!</p>;
  }

  return (
    <div className="quiz-details-container">
      <h2>{quiz.title}</h2>
      <ul>
        {quiz.questions && quiz.questions.length > 0 ? (
          quiz.questions.map((question, index) => (
            <li key={index}>
              <h3>Question {index + 1}: {question.questionText}</h3>
              <ul>
                {question.options.map((option, optIndex) => (
                  <li key={optIndex}>{option}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No questions available for this quiz.</p>
        )}
      </ul>
    </div>
  );
};

export default QuizDetails;
