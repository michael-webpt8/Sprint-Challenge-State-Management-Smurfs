import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/smurfs';

function SmurfForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState('');

  const handleName = e => {
    setName(e.target.value);
  };
  const handleAge = e => {
    setAge(e.target.value);
  };
  const handleHeight = e => {
    setHeight(e.target.value);
  };

  const handleSubmit = e => {
    // e.preventDefault();
    props.onAddSmurf({ name, age, height });

    setName('');
    setAge(0);
    setHeight('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='input'
          name='smurfName'
          onChange={handleName}
          value={name}
          placeholder='Smurfy name...'
        />
        <br />
        <input
          type='number'
          name='smurfAge'
          onChange={handleAge}
          value={age}
          placeholder='Smurfs age...'
        />
        <br />
        <input
          type='input'
          name='smurfHeight'
          onChange={handleHeight}
          value={height}
          placeholder='Smurfs Height...'
        />
        <button type='submit'>Add Smurf</button>
      </form>
    </>
  );
}

const mapDispatchToProps = {
  addSmurf
};

export default connect(
  null,
  mapDispatchToProps
)(SmurfForm);
