import React from 'react';
import classNames from 'classnames';

export default class MissionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundFadeIn: true,
      backgroundFadeOut: false,
      imageBounceIn: true,
      imageBounceOut: false,
    };
  }
  
  render() {
    const styles = {
      global: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      background: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '9000',
        animationDuration: '0.2s',
      },
      image: {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',
        zIndex: '9001',
        animationDuration: '0.5s',
      },
    };
    
    const classes = {
      background: classNames({
        animated: true,
        fadeIn: this.state.backgroundFadeIn,
        fadeOut: this.state.backgroundFadeOut,
      }),
      image: classNames({
        animated: true,
        bounceInDown: this.state.imageBounceIn,
        bounceOutDown: this.state.imageBounceOut,
      }),
    };
    
    return this.props.visible && this.props.image && (
      <div style={styles.global}>
        <div className={classes.background} style={styles.background} />
        <img
          className={classes.image}
          style={styles.image}
          src={this.props.image}
          alt="Mission Modal"
        />
      </div>
    );
  }
}

MissionModal.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  image: React.PropTypes.string,
};
