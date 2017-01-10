import React from 'react';
import classNames from 'classnames';
import TeamScore from '../components/teamScore';

export default function TeamPanel({
  team,
  top,
  left,
  padding,
  width,
  height,
  image,
  selectTeam,
  delay,
}) {
  const styles = {
    global: {
      position: 'absolute',
      top: `${top}`,
      left: `${left}`,
      margin: `${padding}`,
      width: `${width}`,
      height: `${height}`,
      zIndex: `${team.selection ? 1 : 0}`,
      cursor: 'default',
      animationDelay: `${delay}ms`,
    },
    scalable: {
      transition: 'transform 0.1s ease-out',
    },
    imageWrap: {
      position: 'relative',
      width: `${width}`,
      height: `${height}`,
    },
    image: {
      position: 'absolute',
      right: '0',
      bottom: '0',
    },
  };
  
  const className = classNames({
    animated: true,
    bounceInUp: true,
  });
  
  if (team.selection) {
    styles.scalable.transform = 'scale(1.2)';
  }
  
  return (
    <div className={className} style={styles.global} onClick={() => selectTeam()}>
      <div style={styles.scalable}>
        <div style={styles.imageWrap}>
          <img style={styles.image} src={image} alt="Team Panel" />
        </div>
        <TeamScore score={team.score} colorType={team.colorType} />
      </div>
    </div>
  );
}

TeamPanel.propTypes = {
  team: React.PropTypes.shape({
    score: React.PropTypes.number.isRequired,
    colorType: React.PropTypes.number.isRequired,
  }).isRequired,
  top: React.PropTypes.string.isRequired,
  left: React.PropTypes.string.isRequired,
  padding: React.PropTypes.string.isRequired,
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  selectTeam: React.PropTypes.func.isRequired,
  delay: React.PropTypes.number.isRequired,
};
