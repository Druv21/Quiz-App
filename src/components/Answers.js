import React from 'react';
import { questions } from './Questions';
import '../css/Answers.css';

const Answers = () => {
    return (
        <>
        <div className="heading_answer">
            Answers
        </div>
        <div className="show_answer">
           {questions.map((correct) =>(<><div className="align1">Question: {correct.question}</div><div className="align2">Answer: {correct.correctAnswer}</div><br/></>))}
        </div>
        </>
    )
}

export default Answers