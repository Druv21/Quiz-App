import React from 'react'

const Instructions = () => {
    return (
        <>
        <div className="heading">
            Please read the following instructions carefully before attempting the quiz.
        </div>
        <div className="info">
            1. Attempt all the questions.<br/>
            2. You have ___________ time to attempt the questions.<br/>
            3. You will be rewarded 1 mark for every correct answer and 0 mark for eery wrong answer.<br/>
            4. Click on Previous button for viewing previous question.<br/>
            5. Click on Next button for viewing next question.<br/>
            6. Click on Reset button to reset your answer.<br/>
            7. Click on Play Again button to attempt the quiz again.
        </div>
        </>
    )
}

export default Instructions
