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
            
                <Link to='/home'>
                    <button onClick={"Home.js"}>Start Quiz</button>
                </Link>
            
        </>
    )
}

export default Frontpage


// else{
//   if(clicked[current]===-1){
//     clicked[current]=selected;
//   }
//   else{
//     if(!clicked[current]===questions[current].correctAnswer){
//       clicked[current]=selected;
//     }
//     else{
//       setScore(score-1);
//     }
//   }
// }