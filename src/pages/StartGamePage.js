import React,{useState} from 'react'
import { startGame } from '../store/slices/gameInit';
import {useDispatch} from 'react-redux';
import Start from './StartGame.module.css';

const StartGame = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(startGame(username));
  };

  return (
    <div className={Start.centerDiv}>
      <button className={Start.centerButton} onClick={startGameHandler}>Start Game</button>
    </div>
  )
}

export default StartGame;