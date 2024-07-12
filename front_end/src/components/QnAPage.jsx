import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from './QuestionForm.jsx';
import './css/qna-styles.css'; // Import your custom CSS file
import Nav from './navbar.jsx';

const QnAPage = () => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = (newQuestion) => {
        // Add the new question to the beginning of the questions array
        setQuestions([newQuestion, ...questions]);
    };

    return (
        <>
            <Nav />
            <div className="container">
                <div className="question-form-container">
                    <h1>Q&A Page</h1>
                    <QuestionForm addQuestion={addQuestion} />
                </div>
                <div className="question-list-container">
                    <h2>Questions</h2>
                    <QuestionList questions={questions} />
                </div>
            </div>
        </>
    );
};

export default QnAPage;
