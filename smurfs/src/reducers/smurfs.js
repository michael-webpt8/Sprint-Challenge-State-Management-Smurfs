import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_ERROR,
	ADD_SMURFS
} from '../components/actions/smurfs';

const initialState = {
	smurfs: [],
	getSmurfs: null,
	isLoading: false,
	error: null
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_SMURFS_START:
			console.log(action);
			return {
				...state,
				isLoading: true
			};
		case FETCH_SMURFS_SUCCESS:
			console.log(action);
			return {
				...state,
				getSmurfs: action.payload,
				isLoading: false
			};
		case FETCH_SMURFS_ERROR:
			console.log(action);
			return {
				...state,
				error: action.payload,
				isLoading: false
			};
		case ADD_SMURFS:
			return {
				...state,
				smurfs: state.smurfs.smurfs.concat(state.smurfs.getSmurfs),
				isLoading: false
			};
		default:
			return state;
	}
}
