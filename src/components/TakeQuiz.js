// TakeQuiz.js
import React, { useState } from 'react';

const TakeQuiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Show results
      console.log('Quiz finished', userAnswers);
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default TakeQuiz;
