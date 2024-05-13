import React from 'react'
import  {cancelGame}  from '../store/slices/gameInit';
import {useDispatch} from 'react-redux';
const Fetching = () => {
    const dispatch = useDispatch();

  return (
    <div>
    <h1>Loading...</h1>
    <button onClick={()=>{dispatch(cancelGame())}}>Cancel</button>
    </div>
  )
}

export default Fetching;