import React from 'react';
import classNames from 'classnames';

const INTERVAL = Math.floor(1000 / 60);

export default class TeamPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPositionX: props.team.pin.positionX,
      displayPositionY: props.team.pin.positionY,
    };
  }
  
  componentWillMount() {
    this.timer = setInterval(() => this.moveToNextPosition(), INTERVAL);
  }
  
  componentWillUnmount() {
    this.clearInterval();
  }
  
  clearInterval() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
  
  moveToNextPosition() {
    const ratio = 0.25;
    const { positionX, positionY } = this.props.team.pin;
    const { displayPositionX, displayPositionY } = this.state;
    const vector = {
      x: Math.floor((positionX - displayPositionX) * ratio),
      y: Math.floor((positionY - displayPositionY) * ratio),
    };
    
    if (vector.x === 0 && vector.y === 0) {
      this.setState({
        displayPositionX: positionX,
        displayPositionY: positionY,
      });
    } else {
      this.setState({
        displayPositionX: displayPositionX + vector.x,
        displayPositionY: displayPositionY + vector.y,
      });
    }
  }
  
  render() {
    const { team, image, selectTeam, delay } = this.props;
    const styles = {
      global: {
        cursor: 'pointer',
        position: 'absolute',
        top: `${this.state.displayPositionY}px`,
        left: `${this.state.displayPositionX}px`,
        zIndex: `${this.state.displayPositionY}`,
        animationDelay: `${delay}ms`,
      },
      image: {
        position: 'absolute',
        margin: '-31px 0 0 -31px',
        transition: 'transform 0.1s ease-out',
      },
    };
    
    const className = classNames({
      animated: true,
      bounceInDown: true,
    });
    
    if (team.selection) {
      styles.image.transform = 'scale(1.2)';
    }
    
    return (
      <div
        style={styles.global}
        className={className}
        onClick={() => selectTeam()}
      >
        <img style={styles.image} src={image} alt="Team Icon" />
      </div>
    );
  }
}

TeamPin.propTypes = {
  team: React.PropTypes.shape({
    selection: React.PropTypes.bool.isRequired,
    pin: React.PropTypes.shape({
      positionX: React.PropTypes.number.isRequired,
      positionY: React.PropTypes.number.isRequired,
    }),
  }).isRequired,
  image: React.PropTypes.string.isRequired,
  selectTeam: React.PropTypes.func.isRequired,
  delay: React.PropTypes.number.isRequired,
};
