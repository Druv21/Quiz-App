import React from 'react'

const Instructions = () => {
    return (
        <>
        <h2 className="heading">
            Please read the following instructions carefully before attempting the quiz.
        </h2>
        <div className="info">
            1. Attempt all the questions.<br/>
            2. You have 100 seconds to attempt all the questions.<br/>
            3. You will be rewarded 1 mark for every correct answer and 0 mark for eery wrong answer.<br/>
            4. Click on Previous button for viewing the previous question.<br/>
            5. Click on Next button for viewing the next question.<br/>
            6. Click on Play Again button to attempt the quiz again.
        </div>
        </>
    )
}

export default Instructions
