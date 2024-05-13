import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { restartGame } from '../store/slices/gameInit';
import EndCSS from './EndGame.module.css'

const EndGame = () => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.quiz.answers);
  const score = useSelector(state => state.quiz.score);
  const username = useSelector(state => state.gameState.username);
  const restartHandler = () => {
    dispatch(restartGame()); 
  }
  return (
    <div>
        <p>Username: {username}</p>
        <div className={EndCSS.row}>
            <p className={EndCSS.points}> Your Score Was {score}/10</p>
            <button className={EndCSS.btn} onClick={restartHandler}>Restart Game</button>
        </div>
        <hr></hr>
        <table className={EndCSS.table}>
            <tr>
                <th className={EndCSS.points}>Question</th>
                <th className={EndCSS.points}>Answer</th>
            </tr>
            {answers.map((answer)=> 
            <tr>
                <td className={EndCSS.question} dangerouslySetInnerHTML={{__html: answer.question }}></td> 
                <td className={answer.isCorrect ? EndCSS.wrongAnswer : EndCSS.answer }>{answer.correctAnswer}</td>
            </tr>) }
        </table>
    </div>
  )
}

export default EndGame;