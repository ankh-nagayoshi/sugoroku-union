import React from 'react';

import ProgressCells from '../components/progressCells';
import TeamPins from '../components/teamPins';
import TeamPanels from '../components/teamPanels';
import MissionModal from '../components/missionModal';
import Title from '../components/title';
import Dummy from '../components/dummy';

const WIDTH = 1280;
const HEIGHT = 768;

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        visible: false,
        image: '',
      },
    };
  }
  
  componentDidMount() {
    this.moveToCellAll(0);
    this.keydownEvent = (event) => {
      let score = 10;
      let multiSelect = false;
      
      if (event.altKey) {
        score = 1;
      } else if (event.shiftKey) {
        score = 100;
        multiSelect = true;
      }
      
      if (event.which === 27) { // Esc
        this.props.unselectPinAll();
      } else if (event.which >= 49 && event.which <= 53) { // 1 - 5
        this.props.selectTeam(event.which - 49, multiSelect);
      } else if (event.which === 37) { // Left Arrow
        this.props.moveToPreviousCell();
      } else if (event.which === 39) { // Left Arrow
        this.props.moveToNextCell();
      } else if (event.which === 38) { // Up Arrow
        this.props.incrementScore(score);
      } else if (event.which === 40) { // Down Arrow
        this.props.decrementScore(score);
      } else if (event.which === 13) { // Enter
        switch (this.props.phase) {
          case 0:
            this.props.changePhaseToTitle();
            break;
          case 1:
            this.props.changePhaseToPreGame();
            break;
          case 2:
            this.props.changePhaseToPlayGame();
            break;
          default:
            this.props.toggleMissionModal();
        }
      }
    };
    this.resize = () => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    
    this.resize();
    window.addEventListener('keydown', this.keydownEvent);
    window.addEventListener('resize', this.resize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownEvent);
    window.removeEventListener('resize', this.resize);
  }
  
  moveToCellAll(cellIndex) {
    this.props.teams.forEach((team, index) => {
      this.props.selectTeam(index);
      this.props.moveToCell(cellIndex);
    });
    this.props.unselectPinAll();
  }
  
  renderBlank() {
    return (
      <div key={this.props.phase} style={GameBoard.styles.global}>
        <Dummy />
      </div>
    );
  }
  
  renderTitle() {
    return (
      <div key={this.props.phase} style={GameBoard.styles.global}>
        <Title bounceIn />
      </div>
    );
  }
  
  renderPreGame() {
    const styles = {
      global: Object.assign({}, GameBoard.styles.global, {
        backgroundColor: 'lightgray',
        backgroundImage: 'url(./dist/img/base.png)',
      }),
    };
    
    return (
      <div style={styles.global}>
        <Title slideOut />
        <TeamPins
          teams={this.props.teams}
          selectTeam={this.props.selectTeam}
        />
        <TeamPanels
          teams={this.props.teams}
          selectTeam={this.props.selectTeam}
        />
      </div>
    );
  }
  
  renderGame() {
    const styles = {
      global: Object.assign({}, GameBoard.styles.global, {
        backgroundColor: 'lightgray',
        backgroundImage: 'url(./dist/img/base.png)',
      }),
    };
    const {
      progressCells,
      moveToCell,
      teams,
      selectTeam,
      modal,
    } = this.props;
    
    return (
      <div style={styles.global}>
        <ProgressCells
          progressCells={progressCells}
          moveToCell={moveToCell}
        />
        <TeamPins
          teams={teams}
          selectTeam={selectTeam}
        />
        <TeamPanels
          teams={teams}
          selectTeam={selectTeam}
        />
        <MissionModal visible={modal.visible} image={modal.image} />
      </div>
    );
  }
  
  render() {
    const { windowWidth, windowHeight } = this.state;
    const windowScale = Math.min(windowWidth / WIDTH, windowHeight / HEIGHT);
    GameBoard.styles.global.transform = `scale(${windowScale})`;
    switch (this.props.phase) {
      case 0:
        return this.renderBlank();
      case 1:
        return this.renderTitle();
      case 2:
        return this.renderPreGame();
      default:
        return this.renderGame();
    }
  }
}

GameBoard.styles = {
  global: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,
    margin: `-${HEIGHT / 2}px 0 0 -${WIDTH / 2}px`,
    backgroundColor: 'white',
    transition: 'transform 0.01s linear',
  },
};

GameBoard.propTypes = {
  phase: React.PropTypes.number.isRequired,
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({
    selection: React.PropTypes.bool.isRequired,
  })),
  progressCells: React.PropTypes.arrayOf(React.PropTypes.shape({
    isStart: React.PropTypes.bool.isRequired,
    isGoal: React.PropTypes.bool.isRequired,
    pinIndice: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  })),
  modal: React.PropTypes.shape({
    visible: React.PropTypes.bool.isRequired,
    image: React.PropTypes.string.isRequired,
  }).isRequired,
  selectTeam: React.PropTypes.func.isRequired,
  unselectPinAll: React.PropTypes.func.isRequired,
  moveToCell: React.PropTypes.func.isRequired,
  moveToPreviousCell: React.PropTypes.func.isRequired,
  moveToNextCell: React.PropTypes.func.isRequired,
  incrementScore: React.PropTypes.func.isRequired,
  decrementScore: React.PropTypes.func.isRequired,
  changePhaseToTitle: React.PropTypes.func.isRequired,
  changePhaseToPreGame: React.PropTypes.func.isRequired,
  changePhaseToPlayGame: React.PropTypes.func.isRequired,
  toggleMissionModal: React.PropTypes.func.isRequired,
};
