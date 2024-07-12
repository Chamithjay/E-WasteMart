import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from './QuestionForm.jsx';// Import your custom CSS file
import Nav from './navbar.jsx';

const QnAPage = () => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = (newQuestion) => {
        // Add the new question to the beginning of the questions array
        setQuestions([newQuestion, ...questions]);
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
