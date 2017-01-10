import React from 'react';
import classNames from 'classnames';

const INTERVAL_BASE = 50;
const COLORS = [
  'red',
  '#E4007F',
  '#3FA9F5',
  'green',
  'orange',
];

export default class TeamScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayScore: props.score,
      animated: false,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.state.displayScore !== nextProps.score) {
      const interval = 10 / Math.abs(this.state.displayScore - nextProps.score);
      this.setState({ animated: true });
      this.clearInterval();
      this.timer = setInterval(() => this.updateDisplayScore(), INTERVAL_BASE * interval);
    }
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
  
  updateDisplayScore() {
    let change;
    const { score } = this.props;
    
    if (this.state.displayScore > score) {
      change = -1;
    } else {
      change = 1;
    }
    
    this.setState({
      displayScore: this.state.displayScore + change,
    });
    
    if (this.state.displayScore === score) {
      this.clearInterval();
      this.setState({ animated: false });
    }
  }
  
  render() {
    const style = {
      wrap: {
        position: 'absolute',
        height: '60px',
        right: '4px',
        bottom: '20px',
        textAlign: 'right',
      },
      number: {
        position: 'absolute',
        fontWeight: 'bold',
        color: COLORS[this.props.colorType],
        right: '37px',
        bottom: '1px',
        fontSize: '50px',
      },
      text: {
        position: 'absolute',
        fontWeight: 'bold',
        color: COLORS[this.props.colorType],
        right: '1px',
        bottom: '3px',
        fontSize: '30px',
      },
    };
    const className = classNames({
      animated: this.state.animated,
      rubberBand: this.state.animated,
    });
    
    return (
      <div style={style.wrap} className={className}>
        <span style={style.number}>{this.state.displayScore}</span>
        <span style={style.text}>pt</span>
      </div>
    );
  }
}

TeamScore.propTypes = {
  score: React.PropTypes.number.isRequired,
  colorType: React.PropTypes.number.isRequired,
};
