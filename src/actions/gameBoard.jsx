export default {
  joinTeam: (teamName, teamColorType) => {
    return {
      type: 'JOIN_TEAM',
      name: teamName,
      colorType: teamColorType,
    };
  },
  openJoinTeam: () => {
    return {
      type: 'OPEN_JOIN_TEAM',
    };
  },
  closeJoinTeam: () => {
    return {
      type: 'CLOSE_JOIN_TEAM',
    };
  },
  selectTeam: (selectTeamIndex) => {
    return {
      type: 'SELECT_TEAM',
      teamIndex: selectTeamIndex,
    };
  },
  unselectPinAll: () => {
    return {
      type: 'UNSELECT_PIN_ALL',
    };
  },
  moveToCell: (selectCellIndex) => {
    return {
      type: 'MOVE_TO_CELL',
      cellIndex: selectCellIndex,
    };
  },
  movePin: (changeMoving) => {
    return {
      type: 'MOVE_PIN',
      moving: changeMoving,
    };
  },
  incrementScore: (addScore) => {
    return {
      type: 'INCREMENT_SCORE',
      score: addScore,
    };
  },
  decrementScore: (subScore) => {
    return {
      type: 'DECREMENT_SCORE',
      score: subScore,
    };
  },
  changePhaseToTitle: () => {
    return {
      type: 'CHANGE_PHASE_TO_TITLE',
    };
  },
  changePhaseToPreGame: () => {
    return {
      type: 'CHANGE_PHASE_TO_PRE_GAME',
    };
  },
  changePhaseToPlayGame: () => {
    return {
      type: 'CHANGE_PHASE_TO_PLAY_GAME',
    };
  },
  toggleMissionModal: () => {
    return {
      type: 'TOGGLE_MISSION_MODAL',
    };
  },
};
