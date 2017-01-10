// import React from 'react';
import { connect } from 'react-redux';
import GameBoard from '../components/gameBoard';
import GameBoardActions from '../actions/gameBoard';

function mapStateToProps(state) {
  return state.gameBoard;
}

function mapDispatchToProps(dispatch, props) {
  return {
    joinTeam: (teamName, teamColorType) => {
      dispatch(GameBoardActions.joinTeam(teamName, teamColorType));
    },
    openJoinTeam: () => {
      dispatch(GameBoardActions.openJoinTeam());
    },
    closeJoinTeam: () => {
      dispatch(GameBoardActions.closeJoinTeam());
    },
    selectTeam: (index, multiSelect = false) => {
      if (!multiSelect) {
        dispatch(GameBoardActions.unselectPinAll());
      }
      dispatch(GameBoardActions.selectTeam(index));
    },
    unselectPinAll: () => {
      dispatch(GameBoardActions.unselectPinAll());
    },
    moveToCell: (index) => {
      dispatch(GameBoardActions.moveToCell(index));
    },
    moveToPreviousCell: () => {
      dispatch(GameBoardActions.movePin(-1));
    },
    moveToNextCell: () => {
      dispatch(GameBoardActions.movePin(1));
    },
    incrementScore: (addScore) => {
      dispatch(GameBoardActions.incrementScore(addScore));
    },
    decrementScore: (subScore) => {
      dispatch(GameBoardActions.decrementScore(subScore));
    },
    changePhaseToTitle: () => {
      dispatch(GameBoardActions.changePhaseToTitle());
    },
    changePhaseToPreGame: () => {
      dispatch(GameBoardActions.changePhaseToPreGame());
    },
    changePhaseToPlayGame: () => {
      dispatch(GameBoardActions.changePhaseToPlayGame());
    },
    toggleMissionModal: () => {
      dispatch(GameBoardActions.toggleMissionModal());
    },
  };
}

//connectでReduxとReactコンポーネントをつなぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
