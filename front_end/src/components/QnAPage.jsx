import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

// Component to represent the Q&A page
function QnAPage() {
  const [questions, setQuestions] = useState([]); // State to hold the list of questions

  const addQuestion = (question) => {
    setQuestions([...questions, question]); // Add the new question to the list of questions
  };

  return (
    <div>
      <h1>Q&A Page</h1>
      <QuestionForm addQuestion={addQuestion} /> {/* Form to submit a new question */}
      <QuestionList questions={questions} /> {/* List of questions */}
    </div>
  );
}

export default QnAPage;
