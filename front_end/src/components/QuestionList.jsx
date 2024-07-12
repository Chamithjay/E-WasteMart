import React from 'react';
import QuestionItem from './QuestionItem';
import './css/qna.css'


function QuestionList({ questions }) {
  // Check if questions is defined before mapping
  if (!questions || !questions.length) {
    return <div>No questions available.</div>;
  }

  return (
    <div className=" question-list">
      <h2>Questions:</h2>
      {questions.map((question, index) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
