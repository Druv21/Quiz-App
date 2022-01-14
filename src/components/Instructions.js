import React from 'react';
import '../css/Instructions.css';

const Instructions = () => {
    return (
        <>
        <div className="heading">
            Please read the following instructions carefully before attempting the quiz:-
        </div>
        <div className="info">
            1. Attempt all the questions carefully.<br/>
            2. There are <b>5</b> questions in the quiz.<br/>
            3. You have <b>100 seconds</b> to attempt all the questions.<br/>
            4. You will be rewarded <b>1 mark</b> for every correct answer and <b>0 mark</b> for eery wrong answer.<br/>
            5. Click on <b>Previous button</b> for viewing the previous question.<br/>
            6. Click on <b>Next button</b> for viewing the next question.<br/>
            7. Click on <b>Play Again</b> button to attempt the quiz again.
        </div>
        </>
    )
}

export default Instructions
