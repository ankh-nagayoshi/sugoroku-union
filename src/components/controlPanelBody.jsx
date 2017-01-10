import React from 'react';
import Popout from 'react-popout';
import ControlPanelBodyInner from '../components/controlPanelBodyInner';

export default function ControlPanelBody({ visible, windowClosed, gameBoard }) {
  if (visible) {
    return (
      <Popout url="controlpanel.html" title="ControlPanel" onClosing={() => windowClosed()}>
        <ControlPanelBodyInner gameBoard={gameBoard} />
      </Popout>
    );
  }
  
  return <span>No window</span>;
}

ControlPanelBody.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  windowClosed: React.PropTypes.func.isRequired,
  gameBoard: React.PropTypes.shape({}).isRequired,
};
