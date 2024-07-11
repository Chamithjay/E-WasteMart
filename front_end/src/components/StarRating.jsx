import React from 'react';
import { FaStar } from 'react-icons/fa'; // Assuming you use Font Awesome icons

function StarRating({ rating, onChange }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <FaStar
          key={star}
          color={star <= rating ? '#ffc107' : '#e4e5e9'}
          onClick={() => onChange(star)}
          style={{ cursor: 'pointer', marginRight: '2px' }}
        />
      ))}
    </div>
  );
}

export default StarRating;
