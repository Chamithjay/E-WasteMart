import React, { useState } from 'react';

// Component to handle the form for submitting a new answer
function AnswerForm({ addAnswer }) {
  const [content, setContent] = useState(''); // State to hold the content of the answer

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addAnswer(content); // Call the addAnswer function passed as a prop
    setContent(''); // Reset the content field
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Answer</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AnswerForm;
