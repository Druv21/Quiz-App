import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Frontpage.css';

const Frontpage = () => {
    return (
        <>
            <div className="info_link">
                <div className="head">
                    Welcome to the Quiz App
                </div>
                <div className="title">Please read the instructions before starting the quiz.</div>
                <Link className="link_instructions" to='/instructions'>
                   <a href="Instructions.js">Instructions</a>
                </Link>
            </div>
            <div className="start">
                <Link className="link_quizpage" to='/quizpage'>
                    <button className="btn" onClick={"Quizpage.js"}>Start Quiz</button>
                </Link>
            </div>
        </>
    )
}

export default Frontpage