import React from 'react';
import { Link } from 'react-router-dom';

const Frontpage = () => {
    return (
        <>
            <div className="info_link">
                Please read the instructions before starting the quiz.
                <Link to='/instructions'>
                   <a href="Instructions.js">Instructions</a>
                </Link>
            </div>
            
                <Link to='/quizpage'>
                    <button onClick={"Quizpage.js"}>Start Quiz</button>
                </Link>
            
        </>
    )
}

export default Frontpage