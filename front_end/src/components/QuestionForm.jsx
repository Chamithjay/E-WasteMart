import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
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

export default QuestionForm;
