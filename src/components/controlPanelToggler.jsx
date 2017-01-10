import React from 'react';

export default function ControlPanelToggler({ toggleControlPanel }) {
  return <button onClick={() => toggleControlPanel()}>popout</button>;
}

ControlPanelToggler.propTypes = {
  toggleControlPanel: React.PropTypes.func.isRequired,
};
