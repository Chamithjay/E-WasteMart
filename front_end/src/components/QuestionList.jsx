import React from 'react';
import QuestionItem from './QuestionItem';

// Component to display the list of questions
function QuestionList({ questions }) {
  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question, index) => (
        <QuestionItem key={index} question={question} /> // Render each question using the QuestionItem component
      ))}
    </div>
  );
}

export default QuestionList;
