import { combineReducers } from 'redux';
import controlPanel from './controlPanel';
import gameBoard from './gameBoard';

const reducer = combineReducers(
  {
    controlPanel,
    gameBoard,
  }
);

export default reducer;
