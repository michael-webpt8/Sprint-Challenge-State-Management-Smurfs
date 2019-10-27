import React, { useEffect } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';

import SmurfDisplay from './SmurfDisplay';

import { fetchSmurfs } from '../actions/smurfs';
import CreateSmurfs from './CreateSmurf';

function App(props) {
  const { fetchSmurfs } = props;
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      {/* <SmurfForm /> */}
      <CreateSmurfs />
      {props.error && <p>Error: {props.error}</p>}
      {props.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <SmurfDisplay smurfs={props.smurfs} />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs,
    error: state.smurfs.error,
    isLoading: state.smurfs.isLoading
  };
};

const mapDispatchToProps = {
  fetchSmurfs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
