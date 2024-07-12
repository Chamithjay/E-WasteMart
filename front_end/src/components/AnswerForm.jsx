import React, { useState } from 'react';
import './css/qna-styles.css'; // Import your custom CSS file

function AnswerForm({ addAnswer }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnswer(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <div>
        <label>Answer</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="answer-textarea"
        />
      </div>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}

export default AnswerForm;
