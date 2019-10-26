import React from 'react';

function SmurfDisplay(props) {
	console.log(props.smurfs);
	return (
		<div>
			{props.smurfs.map((smurf) => (
				<div key={Date.now()}>
					<h2>{smurf.name}</h2>
					<p>{smurf.age}</p>
					<p>{smurf.height}</p>
				</div>
			))}
		</div>
	);
}
export default SmurfDisplay;
