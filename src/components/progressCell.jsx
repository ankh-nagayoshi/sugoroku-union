import React from 'react';

export default function ProgressCell({ progressCell, moveToCell }) {
  const style = {
    cursor: 'pointer',
    position: 'absolute',
    top: `${progressCell.positionY - 39}px`,
    left: `${progressCell.positionX - 60}px`,
    width: '119px',
    height: '80px',
    opacity: '0',
    backgroundColor: 'rgba(127, 127, 127, 0.5)',
  };
  
  return (
    <div style={style} onClick={() => moveToCell()}>
      P<br />
      {progressCell.pinIndice.join(',')}
    </div>
  );
}

ProgressCell.propTypes = {
  progressCell: React.PropTypes.shape({
    positionX: React.PropTypes.number.isRequired,
    positionY: React.PropTypes.number.isRequired,
    pinIndice: React.PropTypes.arrayOf(
      React.PropTypes.number
    ).isRequired,
  }).isRequired,
  moveToCell: React.PropTypes.func.isRequired,
};
