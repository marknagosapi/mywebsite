import {take, fork, put, call, cancel} from 'redux-saga/effects';
import {startGame, cancelGame} from '../slices/gameInit';
import { fetchQuizFromApi } from '../../utils/api';
import { fetchQuestionsSuccess, fetchQuestionsFail } from '../slices/game';

// eslint-disable-next-line require-yield
function* fetchQuestionsSaga(){
    try{
        const data = yield call(fetchQuizFromApi);
        yield put(fetchQuestionsSuccess(data));

    }catch(error){
        yield put(fetchQuestionsFail("There was an error fetching the questions. Please try again."));
    }

}

function* cancelFetchQuiz(forkedSaga){
    while(true){
        yield take(cancelGame.type);
        yield cancel(forkedSaga)
    }
}

export default function* startGameSaga(){
    while(true){
        yield take(startGame.type);
        const forkedSaga = yield fork(fetchQuestionsSaga);
        yield fork(cancelFetchQuiz,forkedSaga);
    }
}