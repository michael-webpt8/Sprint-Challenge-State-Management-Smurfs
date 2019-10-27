import React from 'react';

export default ({ post: { name, height, age } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  );
};
