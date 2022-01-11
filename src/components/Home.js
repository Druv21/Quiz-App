import React,{useState} from 'react'
import '../css/Home.css';

const Home = () => {

    const [current, setCurrent] = useState(0);
    const [showScore, setshowScore] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
          question: "Commonly used data types DO NOT include:",
          options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
          correctAnswer: "3. Alerts"
        },
        {
          question: "Arrays in JavaScript can be used to store ______.",
          options: ["1. Numbers and Strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
          correctAnswer: "4. All of the above"
        },
        {
          question: "String values must be enclosed within _____ when being assigned to variables.",
          options: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses"],
          correctAnswer: "3. Quotes"
        },
        {
          question: "A very useful tool used during development and debugging for printing content to the debugger is:",
          options: ["1. JavaScript", "2. Terminal/Bash", "3. for loops", "4. console.log"],
          correctAnswer: "4. console.log"
        },
        {
          question: "Which of the following is a statement that can be used to terminate a loop or switch statement?",
          options: ["1. break", "2. stop", "3. halt", "4. exit"],
         correctAnswer: "1. break"
        }
      ];

      const handleAnswerButtonClick = (marked) => {
        if(current<questions.length-1){
        setCurrent(current+1)
        }
        else{
          alert("End of the quiz!!")
        }
        if (marked===questions[current].correctAnswer) {
            setScore(score + 1);
        }
    };

    return (
        <div className="outer">
           <div className="question_no">
                <span>Question {current+1}</span>/{questions.length}
            </div>
            <div className="instruction">Select any one option.</div>
            <div className="question_text">Question: {questions[current].question}</div>
            <div className="alloptions">
                {questions[current].options.map((answer) => (<button onClick={()=> handleAnswerButtonClick(answer)}>{answer}</button>))}
            </div>
            <div className='app'>{showScore ? <div className='score-section'> You scored {score} out of {questions.length}.</div>
              :<></>}
            </div>
    </div>
    )
}

export default Home