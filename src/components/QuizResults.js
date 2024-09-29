
import React from 'react';

const QuizResults = ({ correctAnswers, userAnswers }) => {
  const score = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your score: {score}/{correctAnswers.length}</p>
      <h3>Correct Answers:</h3>
      {correctAnswers.map((answer, index) => (
        <p key={index}>Question {index + 1}: {answer}</p>
      ))}
    </div>
  );
};

export default QuizResults;
