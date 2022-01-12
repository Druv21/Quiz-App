import React,{useState,useEffect} from 'react';
import '../css/Home.css';

var clicked=[-1];

const Home = () => {

    const [current, setCurrent] = useState(0);
    const [showScore, setshowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(20);

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

      const playAgain=()=>{
          setScore(0);
          setshowScore(false);
          setCurrent(0);
          setTime(20);
          clicked.fill(-1);
      }

      const previous=()=>{
        const previousQuestion = current - 1;
        if(previousQuestion>=0){
            setCurrent(previousQuestion);
        }
        else{
            alert("You have reached the first question of the quiz!!");
        }
      }

      const next=()=>{
          const nextQuestion = current + 1;
          if (nextQuestion < questions.length) {
              setCurrent(nextQuestion);
          } 
          else {
             setshowScore(true);
          }
      }

      const handleAnswerButtonClick = (marked,selected) => {
        if (marked===questions[current].correctAnswer) {
          if(clicked[current]===-1){
            setScore(score + 1);
          }
          else{
            if(clicked[current]===selected){
              clicked[current]=selected;
            }
            else{
              setScore(score + 1);
            }
          }
        clicked[current]=selected;
        }
        else{
          if(clicked[current]===-1){
            clicked[current]=selected;
          }
          else{
            if(!clicked[current]===questions[current].correctAnswer){
              clicked[current]=selected;
            }
            else{
              if(score>0)
              setScore(score - 1);
            }
          }
        }
      };

      useEffect(()=>{
     const interval= setInterval(()=>{
              if(time && showScore===false){
                  const newtime=time-1;
                  setTime(newtime);
              }
              else{
                  setshowScore(true);
              }
         },1000);
         return ()=> clearInterval(interval);
      },[time]);

    return (
        <div className="outer">
           <div className="question_no">
                <span>Question {current+1}</span>/{questions.length}
            </div>
            <div className="instruction">Select any one option.</div>
            <div className='timer'>
                 <p>{time}</p> 
            </div>
            <div className="question_text">{questions[current].question}</div>
            <div className="alloptions">
                {questions[current].options.map((answer,index) => (<button onClick={()=> {
                      if(!showScore) handleAnswerButtonClick(answer,index)
                  }}>{answer}</button>))}
            </div>
            <div className="app">{showScore ? <div className='score-section'> You scored {score} out of {questions.length}.<br/>
                 Do you want to play again? <br/><button className="playAgain" onClick={playAgain}> Play Again </button></div>
              :<>
                 <button onClick={previous}>Previous</button>
                 <button onClick={next}>Next</button>
               </>}
            </div>
        </div>
    )
}

export default Home

// previous krne pr and on clicking many options score should not increase.
// can add functionality of resetting the answer.

// const Timer = (props:any) => {
//     const {initialMinute = 0,initialSeconds = 0} = props;
//     const [ minutes, setMinutes ] = useState(initialMinute);
//     const [seconds, setSeconds ] =  useState(initialSeconds);
//     useEffect(()=>{
//     let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             } 
//         }, 1000)
//         return ()=> {
//             clearInterval(myInterval);
//           };
//     });

//     return (
//         <div>
//         { minutes === 0 && seconds === 0
//             ? null
//             : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
//         }
//         </div>
//     )
// }


 // const reset=(marked)=>{
      //   if(marked===questions[current].correctAnswer){
      //      setScore(score-1);
      //   }
      // }
