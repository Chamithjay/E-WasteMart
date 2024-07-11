import React, { useState } from 'react';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';

function QuestionItem({ question }) {
  const [answers, setAnswers] = useState([]);

  const addAnswer = (answer) => {
    setAnswers([...answers, { content: answer, rating: 0 }]); // Modify to include rating with initial value 0
  };

  const rateAnswer = (index, rating) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = { ...updatedAnswers[index], rating };
    setAnswers(updatedAnswers);
  };

  return (
    <div>
      <h3>{question.title}</h3>
      <p>{question.content}</p>
      <AnswerList answers={answers} rateAnswer={rateAnswer} /> {/* Pass rateAnswer function to AnswerList */}
      <AnswerForm addAnswer={addAnswer} />
    </div>
  );
}

export default QuestionItem;
