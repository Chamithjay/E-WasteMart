import React from 'react';
import StarRating from './StarRating'; // Assuming you have a StarRating component

function AnswerList({ answers, rateAnswer }) {
  return (
    <div>
      <h4>Answers</h4>
      {answers.map((answer, index) => (
        <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <p>{answer.content}</p>
          <StarRating rating={answer.rating} onChange={(rating) => rateAnswer(index, rating)} />
        </div>
      ))}
    </div>
  );
}

export default AnswerList;
