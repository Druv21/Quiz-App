import React,{useState,useEffect} from 'react';
import { questions } from './Questions';
import {Link} from 'react-router-dom';
import '../css/Quizpage.css';

var clicked=[-1];
const Quizpage = () => {

    const [current, setCurrent] = useState(0);
    const [showScore, setshowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(20);

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
        <>
            <div className="question_no">
                <span>Question {current+1}</span>/{questions.length}
            </div>
            <div className="instruction">
              <div>
                Select any one option.
              </div>
              <div className="timer">
                 Time left: {time}
              </div>
            </div>
            <div className="question_text">{questions[current].question}</div>
            <div className="alloptions">
                {questions[current].options.map((answer,index) => (<button className="btn3" onClick={()=> {
                      if(!showScore) handleAnswerButtonClick(answer,index)
                  }}>{answer}</button>))}
            </div>
            <div className="app">{showScore ? <>
            <div className="score-section"> You scored {score} out of {questions.length}.<br/>
            <div className="display">
              <Link className="link_answers" to='/answers'>
                 <button className="view_answers" onClick={"Answers.js"}>View Answers</button>
              </Link>
            </div>
            </div>
            <div className="playbtn"> Do you want to play again? <br/><button className="btn2" onClick={playAgain}> Play Again </button></div>
            </>
              :<div className="buttons">
                 <button className="btn1" onClick={previous}>Previous</button>
                 <button className="btn1" onClick={next}>Next</button>
               </div>}
            </div>
        </>
    )
}

export default Quizpage

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