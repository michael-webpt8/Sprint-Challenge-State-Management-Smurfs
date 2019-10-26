import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';
import axios from 'axios';

import SmurfDisplay from './SmurfDisplay';

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		axios
			.get(`http://localhost:3333/smurfs`)
			.then((res) => this.setState({ smurfs: res.data }))
			.catch((err) => console.log(err));
	}
	render() {
		console.log(this.props.smurfs);
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your state management version of Smurfs!</div>
				<SmurfForm />
				<SmurfDisplay smurfs={this.props.smurfs} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs.smurfs
	};
};

export default connect(
	mapStateToProps,
	{}
)(App);
