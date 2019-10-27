import React from 'react';

function SmurfDisplay(props) {
  const { smurfs } = props;
  console.log('loading', smurfs);
  if (!props.smurfs) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div>
        {smurfs.map(smurf => (
          <div key={Date.now()}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default SmurfDisplay;
