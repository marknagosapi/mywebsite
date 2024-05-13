import React from 'react'

import StartGame from './StartGamePage'
import Fetching from './FetchingPage'
import Game from './GamePage'
import EndGame from './EndGamePage'
import * as stages from '../utils/constants'
import { useSelector } from 'react-redux'
import Main from './MainPage.module.css'

const MainPage = () => {
  const currentStage = useSelector(state => state.gameState.stage)

  let displayedPage;

  switch(currentStage){
    case stages.START_GAME:
      displayedPage = <StartGame/>
      break;
    case stages.FETCHING_GAME:
      displayedPage = <Fetching/>
      break;
    case stages.GAME:
      displayedPage = <Game/>
      break;
    case stages.END_GAME:
      displayedPage = <EndGame/>
      break;
    default:
        break;
  }

    return <div className={Main.all}>

        <h1 className={Main.header}>The Video Game Quiz</h1>
        {displayedPage}
    </div>
}

export default MainPage