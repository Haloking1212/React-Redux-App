import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/actions';

const NagerData = props => {
  return (
    <div>
      <h1>Nager Data</h1>
      <button onClick={props.getData}>Get Data!</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    date: state.date,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(NagerData);
