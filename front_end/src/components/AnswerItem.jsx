import React from 'react';
import StarRating from './StarRating'; // Assuming you have a StarRating component
import './css/qna-styles.css'; // Import your custom CSS file

function AnswerItem({ answer, rateAnswer }) {
  return (
    <div className="answer-item">
      <p>{answer.content}</p>
      <StarRating rating={answer.rating} onChange={(rating) => rateAnswer(rating)} />
    </div>
  );
}

export default AnswerItem;
