import axios from 'axios';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_ADD = 'ADD_SMURFS_ADD';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_ERROR = 'ADD_SMURFS_ERROR';

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
      });
  };
}

export function addSmurf(smurf) {
  return dispatch => {
    dispatch({ type: ADD_SMURFS_START });

    axios
      .post(`http://localhost:3333/smurfs`, {
        type: ADD_SMURFS_ADD,
        payload: smurf
      })
      .then(res => ({ type: ADD_SMURFS_SUCCESS, payload: res.data }))
      .catch(err => ({ type: ADD_SMURFS_ERROR, payload: err }));
  };
}
