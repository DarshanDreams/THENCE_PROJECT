import React, { useState } from 'react';
import './Questions.css'; // Import CSS file for styling

function Questions() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    { question: "Question 1", answer: "Answer to question 1" },
    { question: "Question 2", answer: "Answer to question 2" },
    { question: "Question 3", answer: "Answer to question 3" },
    { question: "Question 4", answer: "Answer to question 4" },
    { question: "Question 5", answer: "Answer to question 5" },
  ];

  const handleToggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="questions-container">
      <div className="header-container">
        <div className="header-text">
          <h3 className="mind-text">What's on your mind</h3>
          <p className="ask-text">Ask Questions</p>
        </div>
        <hr />
      </div>
      <div className="question-box">
        {questions.map((item, index) => (
          <div key={index} className="question">
            <div className="question-title" onClick={() => handleToggleAnswer(index)}>
              <p>{item.question}</p>
              <span>{expandedIndex === index ? "-" : "+"}</span>
            </div>
            {expandedIndex === index && <p className="answer">{item.answer}</p>}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
