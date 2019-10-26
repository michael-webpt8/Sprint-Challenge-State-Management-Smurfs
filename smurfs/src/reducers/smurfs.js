import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_ERROR
} from '../components/actions/smurfs';

const initialState = [
	{
		name: 'Brainey',
		age: 200,
		height: '5cm',
		id: 0
	}
];

export function reducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
