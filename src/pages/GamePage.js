import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {answerQuestion} from '../store/slices/game';
import { finishGame } from '../store/slices/gameInit';
import GamePageCSS from './GamePage.module.css';

const Game= () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(state => state.quiz.questions[state.quiz.currentQuestionIndex].question);
  const [timeLeft, setTimeLeft] = useState(60);
  const score = useSelector(state => state.quiz.score);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);

  const answerHandler = (answer) =>{

    dispatch(answerQuestion({answer}));
  }

  const endGameHandler = () => {
    dispatch(finishGame());
  }

  useEffect(()=>{
    const interval = setInterval(()=>{

        setTimeLeft((prev)=>prev -1 )

    }, 1000);

    return () => {
        clearInterval(interval)
    }

  },[])
  
  return (
    <div className={GamePageCSS.column}>
        <div className={GamePageCSS.rowDiv}>
            <p>Question {currentQuestionIndex}/10</p>
            <p>Time Left: {timeLeft}</p>
            <p>Score: {score}</p>
        </div>
        <div className={GamePageCSS.centerDiv}>
            <p className={GamePageCSS.question} dangerouslySetInnerHTML={{__html: currentQuestion}}></p>
            <div className={GamePageCSS.rowDiv}>
                <button className={GamePageCSS.btn} onClick={()=> answerHandler('True')}>True</button>
                <button className={GamePageCSS.btn} onClick={()=> answerHandler('False')}>False</button>
            </div>
           
        </div>

        {/* <button onClick={endGameHandler}>Quit Game</button> */}

    </div>
  )
}

export default Game;