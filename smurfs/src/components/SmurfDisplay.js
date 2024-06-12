import React from 'react';
import Smurfs from './Smurfs';
import { connect } from 'react-redux';

function SmurfDisplay({ smurfs }) {
  console.log('loading', smurfs);
  if (!smurfs.length) {
    return <h2>No Post...</h2>;
  }
  return (
    <>
      <div>
        {smurfs.map(smurf => (
          <Smurfs smurf={smurf} key={smurf.id} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(SmurfDisplay);
