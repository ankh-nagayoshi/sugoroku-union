// import React from 'react';
import { connect } from 'react-redux';
import ControlPanel from '../components/controlPanel';
import ControlPanelActions from '../actions/controlPanel';

function mapStateToProps(state) {
  return {
    visible: state.controlPanel.visible,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    toggleControlPanel: () => {
      dispatch(ControlPanelActions.toggleVisible());
    },
    windowClosed: () => {
      dispatch(ControlPanelActions.windowClosed());
    },
  };
}

//connectでReduxとReactコンポーネントをつなぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
