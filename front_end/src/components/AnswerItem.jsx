import React from 'react';
import StarRating from './StarRating'; // Assuming you have a StarRating component
import './css/qna.css'

function AnswerItem({ answer, rateAnswer }) {
  return (
    <div className="answer-item">
      <p>{answer.index}{answer.content}</p>
      <StarRating rating={answer.rating} onChange={(rating) => rateAnswer(rating)} />
    </div>
  );
}

export default AnswerItem;
