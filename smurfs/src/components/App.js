import React, { useEffect } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';

import SmurfDisplay from './SmurfDisplay';

import { fetchSmurfs } from './actions/smurfs';

function App(props) {
	const { fetchSmurfs } = props;
	useEffect(() => {
		fetchSmurfs();
	}, [fetchSmurfs]);

	if (!props.smurfs) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<SmurfForm />
			<SmurfDisplay smurfs={props.smurfs} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs.smurfs
	};
};

const mapDispatchToProps = {
	fetchSmurfs
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
