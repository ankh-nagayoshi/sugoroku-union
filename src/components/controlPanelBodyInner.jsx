import React from 'react';

export default function ControlPanelBodyInner({ gameBoard }) {
  return (
    <div>
      <button onClick={() => { gameBoard.joinTeam('team', 0); }}>join team</button>
    </div>
  );
}

ControlPanelBodyInner.propTypes = {
  gameBoard: React.PropTypes.shape({
    joinTeam: React.PropTypes.func.isRequired,
  }).isRequired,
};

