import React from 'react';
import ControlPanelToggler from '../components/controlPanelToggler';
import ControlPanelBody from '../components/controlPanelBody';

export default function ControlPanel({ visible, toggleControlPanel, windowClosed, gameBoard }) {
  return (
    <div>
      <ControlPanelToggler toggleControlPanel={toggleControlPanel} />
      <ControlPanelBody visible={visible} windowClosed={windowClosed} gameBoard={gameBoard} />
    </div>
  );
}

ControlPanel.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  toggleControlPanel: React.PropTypes.func.isRequired,
  windowClosed: React.PropTypes.func.isRequired,
  gameBoard: React.PropTypes.shape({}).isRequired,
};
