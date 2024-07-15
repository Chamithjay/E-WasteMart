import React, { useState } from 'react';
import './css/qna.css'


// Component to handle the form for submitting a new question
function QuestionForm({ addQuestion }) {
  const [title, setTitle] = useState(''); // State to hold the title of the question
  const [content, setContent] = useState(''); // State to hold the content of the question

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addQuestion({ title, content }); // Call the addQuestion function passed as a prop
    setTitle(''); // Reset the title field
    setContent(''); // Reset the content field
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;
