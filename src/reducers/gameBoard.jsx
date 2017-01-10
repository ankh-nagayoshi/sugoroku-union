// 初期ステート設定
const initialStateTeam = {
  progress: 0,
  score: 0,
  colorType: 0,
  name: 'no name',
  selection: false,
  pin: {
    positionX: 0,
    positionY: 0,
  },
  incrementScores: [],
  decrementScores: [],
};

const initialStateProgressCell = {
  selection: false,
  positionX: 0,
  positionY: 0,
  isStart: false,
  isGoal: false,
  pinIndice: [],
  pinOffsets: [
    { x: 0, y: -40 }, // team1
    { x: -70, y: -40 }, // team2
    { x: 70, y: -40 }, // team3
    { x: -35, y: 30 }, // team4
    { x: 35, y: 30 }, // team5
  ],
  missions: [1],
  missionInstant: false,
  missionIndex: 0,
};

const x = _x => Math.floor((_x + (119 / 2)) + 35);
const y = _y => Math.floor((_y + 768 + (80 / 2)) - 135);

const initialStateGameBoard = {
  phase: 0, // 0:ブランク 1:表紙 2:ゲーム開始前 3:ゲーム中
  teams: [
    Object.assign({}, initialStateTeam, {
      colorType: 0,
      name: 'team1',
    }),
    Object.assign({}, initialStateTeam, {
      colorType: 1,
      name: 'team2',
    }),
    Object.assign({}, initialStateTeam, {
      colorType: 2,
      name: 'team3',
    }),
    Object.assign({}, initialStateTeam, {
      colorType: 3,
      name: 'team4',
    }),
    Object.assign({}, initialStateTeam, {
      colorType: 4,
      name: 'team5',
    }),
  ],
  progressCells: [ // w 118, h 80
    Object.assign({}, initialStateProgressCell, {
      positionX: x(28),
      positionY: y(-520),
      isStart: true,
      pinOffsets: [
        { x: -70, y: 10 }, // team1
        { x: 0, y: 10 }, // team2
        { x: 70, y: 10 }, // team3
        { x: 140, y: 10 }, // team4
        { x: 210, y: 10 }, // team5
      ],
    }),
    
    Object.assign({}, initialStateProgressCell, {
      positionX: x(28),
      positionY: y(-370),
      missions: [1],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(28),
      positionY: y(-211),
      missions: [12, 13],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(151),
      positionY: y(-109),
      missions: [6, 7, 8],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, { 
      positionX: x(247),
      positionY: y(-239),
      missions: [15, 16, 17, 18],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(254),
      positionY: y(-414),
      missions: [5],
      missionInstant: false,
    }),
    
    Object.assign({}, initialStateProgressCell, {
      positionX: x(419),
      positionY: y(-444),
      missions: [9],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(459),
      positionY: y(-306),
      missions: [10],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(497),
      positionY: y(-138),
      missions: [14],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(659),
      positionY: y(-223),
      missions: [2, 3],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(661),
      positionY: y(-404),
      missions: [4],
      missionInstant: false,
    }),
    
    Object.assign({}, initialStateProgressCell, {
      positionX: x(754),
      positionY: y(-560),
      missions: [15, 16, 17, 18],
      missionInstant: true,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(854),
      positionY: y(-364),
      missions: [4],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(872),
      positionY: y(-183),
      missions: [6, 7, 8],
      missionInstant: true,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(1042),
      positionY: y(-155),
      missions: [14],
      missionInstant: false,
    }),
    Object.assign({}, initialStateProgressCell, {
      positionX: x(1068),
      positionY: y(-339),
      missions: [20],
      missionInstant: false,
    }),
    
    Object.assign({}, initialStateProgressCell, {
      positionX: x(1060),
      positionY: y(-600),
      isGoal: true,
      pinOffsets: [
        { x: 0, y: 30 }, // team1
        { x: -70, y: 30 }, // team2
        { x: 70, y: 30 }, // team3
        { x: -35, y: 160 }, // team4
        { x: 35, y: 160 }, // team5
      ],
    }),
  ],
  modal: {
    visible: false,
    image: '',
  },
  openedJoinTeam: false,
};

const team = (state = initialStateTeam, action) => {
  switch (action.type) {
    case 'JOIN_TEAM':
      return Object.assign({}, state, {
        name: action.name,
        colorType: action.colorType,
      });
    case 'SELECT_TEAM':
      return Object.assign({}, state, {
        selection: true,
      });
    case 'UNSELECT_PIN_ALL':
      return Object.assign({}, state, {
        selection: false,
      });
    case 'INCREMENT_SCORE':
      if (!state.selection) {
        return state;
      }
      return Object.assign({}, state, {
        score: state.score + action.score,
        incrementScores: [...state.incrementScores, action.score],
      });
    case 'DECREMENT_SCORE':
      if (!state.selection) {
        return state;
      }
      return Object.assign({}, state, {
        score: state.score - action.score,
        decrementScores: [...state.decrementScores, -action.score],
      });
    default:
      return state;
  }
};

const assignTeams = (state, action) => {
  return Object.assign({}, state, {
    teams: state.teams.map((stateTeam) => {
      return team(stateTeam, action);
    }),
  });
};

const assignTeamPinPosition = (stateTeam, teamIndex, targetCell) => {
  return Object.assign({}, stateTeam, {
    pin: {
      positionX: targetCell.positionX + targetCell.pinOffsets[teamIndex].x,
      positionY: targetCell.positionY + targetCell.pinOffsets[teamIndex].y,
    },
  });
};

const assignProgressCellRemovePinIndice = (stateProgressCell, removePinIndice) => {
  return Object.assign({}, stateProgressCell, {
    pinIndice: stateProgressCell.pinIndice.filter((statePinIndex) => {
      return !removePinIndice.includes(statePinIndex);
    }),
  });
};

const assignProgressCellAddPinIndice = (stateProgressCell, addPinIndice) => {
  return Object.assign({}, stateProgressCell, {
    pinIndice: stateProgressCell.pinIndice.concat(addPinIndice),
  });
};

const gameBoardBlank = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const gameBoardTitle = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const gameBoardPreGame = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const gameBoardPlayGame = (state, action) => {
  switch (action.type) {
    case 'OPEN_JOIN_TEAM':
      return Object.assign({}, state, { openedJoinTeam: true });
    case 'CLOSE_JOIN_TEAM':
      return Object.assign({}, state, { openedJoinTeam: false });
    case 'MOVE_PIN': {
      const moving = action.moving;
      let newProgressCells = state.progressCells.concat();
      const newTeams = state.teams.map((stateTeam, teamIndex) => {
        if (!stateTeam.selection) {
          return stateTeam;
        }
        
        const currentIndex = newProgressCells.findIndex((stateProgressCell) => {
          return stateProgressCell.pinIndice.includes(teamIndex);
        });
        let targetIndex = currentIndex + moving;
        targetIndex = Math.max(0, Math.min(newProgressCells.length - 1, targetIndex));
        if (currentIndex === targetIndex) {
          return stateTeam;
        }
        
        const newTeam = assignTeamPinPosition(stateTeam, teamIndex, newProgressCells[targetIndex]);
        
        newProgressCells = newProgressCells.map((stateProgressCell) => {
          return assignProgressCellRemovePinIndice(stateProgressCell, [teamIndex]);
        });
        
        newProgressCells = [
          ...newProgressCells.slice(0, targetIndex),
          assignProgressCellAddPinIndice(newProgressCells[targetIndex], [teamIndex]),
          ...newProgressCells.slice(targetIndex + 1),
        ];
        
        return newTeam;
      });
      
      return Object.assign({}, state, {
        teams: newTeams,
        progressCells: newProgressCells,
      });
    }
    case 'INCREMENT_SCORE':
      return assignTeams(state, action);
    case 'DECREMENT_SCORE':
      return assignTeams(state, action);
    case 'TOGGLE_MISSION_MODAL': {
      if (state.modal.visible) {
        return Object.assign({}, state, {
          modal: {
            visible: false,
            image: '',
          },
        });
      }
      
      const teamIndex = state.teams.findIndex(t => t.selection);
      if (teamIndex < 0) {
        return state;
      }
      
      const cellIndex = state.progressCells.findIndex((cell) => {
        return !cell.isStart && !cell.isGoal && cell.pinIndice.includes(teamIndex);
      });
      if (cellIndex < 0) {
        return state;
      }
      
      const currentMissions = state.progressCells[cellIndex].missions;
      if (currentMissions.length <= 0) {
        console.log(`No missions! cellIndex:${cellIndex}`);
        return state;
      }
      
      let missionIndex;
      if (state.progressCells[cellIndex].missionInstant) {
        missionIndex = Math.floor(Math.random() * currentMissions.length);
      } else {
        missionIndex = state.progressCells[cellIndex].missionIndex;
      }
      
      const showMissionId = currentMissions[missionIndex];
      const newState = Object.assign({}, state, {
        modal: {
          visible: true,
          image: `./dist/img/${`00${showMissionId}`.slice(-2)}.png`,
        },
      });
      
      if (state.progressCells[cellIndex].missionInstant) {
        const shiftedMissions = currentMissions.slice(0);
        shiftedMissions.splice(missionIndex, 1);
        
        newState.progressCells = [
          ...state.progressCells.slice(0, cellIndex),
          Object.assign({}, state.progressCells[cellIndex], {
            missions: shiftedMissions,
          }),
          ...state.progressCells.slice(cellIndex + 1),
        ];
      } else {
        newState.progressCells = [
          ...state.progressCells.slice(0, cellIndex),
          Object.assign({}, state.progressCells[cellIndex], {
            missionIndex: (missionIndex + 1) % currentMissions.length,
          }),
          ...state.progressCells.slice(cellIndex + 1),
        ];
      }
      
      return newState;
    }
    default:
      return state;
  }
};

export default function gameBoard(state = initialStateGameBoard, action) {
  switch (action.type) {
    case 'JOIN_TEAM':
      return Object.assign({}, state, {
        teams: [
          ...state.teams,
          team(undefined, action),
        ],
      });
    case 'SELECT_TEAM':
      return Object.assign({}, state, {
        teams: [
          ...state.teams.slice(0, action.teamIndex),
          team(state.teams[action.teamIndex], action),
          ...state.teams.slice(action.teamIndex + 1),
        ],
      });
    case 'UNSELECT_PIN_ALL':
      return assignTeams(state, action);
    case 'MOVE_TO_CELL': {
      const targetCell = state.progressCells[action.cellIndex];
      const joinTeamPinIndice = [];
      const newTeams = state.teams.map((stateTeam, index) => {
        if (stateTeam.selection) {
          joinTeamPinIndice.push(index);
          return assignTeamPinPosition(stateTeam, index, targetCell);
        }
        return stateTeam;
      });
      
      let newProgressCells = state.progressCells.map((stateProgressCell) => {
        return assignProgressCellRemovePinIndice(stateProgressCell, joinTeamPinIndice);
      });
      
      newProgressCells = [
        ...newProgressCells.slice(0, action.cellIndex),
        assignProgressCellAddPinIndice(newProgressCells[action.cellIndex], joinTeamPinIndice),
        ...newProgressCells.slice(action.cellIndex + 1),
      ];
      
      return Object.assign({}, state, {
        teams: newTeams,
        progressCells: newProgressCells,
      });
    }
    case 'CHANGE_PHASE_TO_TITLE':
      return Object.assign({}, state, {
        phase: 1,
      });
    case 'CHANGE_PHASE_TO_PRE_GAME':
      return Object.assign({}, state, {
        phase: 2,
      });
    case 'CHANGE_PHASE_TO_PLAY_GAME':
      return Object.assign({}, state, {
        phase: 3,
      });
    default:
      switch (state.phase) {
        case 0:
          return gameBoardBlank(state, action);
        case 1:
          return gameBoardTitle(state, action);
        case 2:
          return gameBoardPreGame(state, action);
        default:
          return gameBoardPlayGame(state, action);
      }
  }
}
