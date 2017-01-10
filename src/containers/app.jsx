// import React from 'react';
import { connect } from 'react-redux';
import App from '../components/app';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps() {
  return {};
}

//connectでReduxとReactコンポーネントをつなぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
