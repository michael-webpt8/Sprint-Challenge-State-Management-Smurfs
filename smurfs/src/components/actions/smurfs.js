export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export function fetchSmurfs() {
	return (dispatch) => {
		dispatch({ type: FETCH_SMURFS_START });

		axios
			.get(`http://localhost:3333/smurfs`)
			.then((res) => {
				dispatch({ type: FETCH_SMURFS_SUCCESS, payload });
			})
			.catch((err) => {
				dispatch({ type: FETCH_SMURFS_ERROR, payload });
			});
	};
}
