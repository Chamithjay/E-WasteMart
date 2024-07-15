import React, { useState } from 'react';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';


function QuestionItem({ question }) {
  const [answers, setAnswers] = useState([]);

  const addAnswer = (answerContent) => {
    const newAnswer = { content: answerContent, rating: 0 };
    setAnswers([...answers, newAnswer]);
  };

  const rateAnswer = (index, rating) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = { ...updatedAnswers[index], rating };
    setAnswers(updatedAnswers);
  };

  return (
    <div className="question-item">
      <h3>{question.title}</h3>
      <p>{question.content}</p>
      <AnswerList answers={answers} rateAnswer={rateAnswer} />
      <AnswerForm addAnswer={addAnswer} />
    </div>
  );
}

export default QuestionItem;
