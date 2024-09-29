// src/components/CreateQuiz.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    if (currentQuestion) {
      setQuestions([
        ...questions,
        {
          questionText: currentQuestion,
          options: currentOptions,
        },
      ]);
      setCurrentQuestion('');
      setCurrentOptions(['', '', '', '']); // Reset options after adding a question
    }
  };

  const handleSubmitQuiz = () => {
    if (quizTitle && questions.length > 0) {
      const newQuiz = { title: quizTitle, questions };
      const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
      storedQuizzes.push(newQuiz);
      localStorage.setItem('quizzes', JSON.stringify(storedQuizzes));
      navigate('/quizzes');
    } else {
      alert('Please enter a title and at least one question.');
    }
  };

  return (
    <div>
      <h2>Create a New Quiz</h2>
      <input
        type="text"
        placeholder="Enter quiz title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Enter question"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />
        {currentOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const newOptions = [...currentOptions];
              newOptions[index] = e.target.value;
              setCurrentOptions(newOptions);
            }}
          />
        ))}
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default CreateQuiz;
