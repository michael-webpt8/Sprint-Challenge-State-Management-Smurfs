import axios from 'axios';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURFS = 'ADD_SMURFS';

export function fetchSmurfs(smurfs) {
	return (dispatch) => {
		dispatch({ type: FETCH_SMURFS_START });

		axios
			.get(`http://localhost:3333/smurfs`)
			.then((res) => {
				dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res });
				dispatch({ type: ADD_SMURFS, payload: smurfs });
			})
			.catch((err) => {
				dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
			});
	};
}

export function addSmurf(smurf) {
	return (dispatch) => {
		dispatch({ type: ADD_SMURFS, payload: smurf });
	};
}
