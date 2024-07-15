import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from './QuestionForm.jsx';
import Nav from './navbar.jsx';
import  './css/qna.css'
import Back from './Images/qna.jpg'

const QnAPage = () => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = (newQuestion) => {
        // Add the new question to the beginning of the questions array
        setQuestions([newQuestion, ...questions]);
    };

    return (
        <div style={{ backgroundImage:`url(${Back})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <Nav />
            <div className="container1">
                <div className="question-form-container">
                    <h1>Q&A Page</h1>
                    <hr className=" hr" /> 
                    <QuestionForm addQuestion={addQuestion} />
                </div>
                <div className="question-list-container">
                    <h2>Questions</h2>
                    <QuestionList questions={questions} />
                </div>
            </div>
        </div>
    );
};

export default QnAPage;
