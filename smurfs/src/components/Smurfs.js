import React from 'react';

export default props => {
  if (!props.smurf) {
    return <h3>Loading...</h3>;
  }
  const { name, age, height } = props.smurf;
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  );
};
