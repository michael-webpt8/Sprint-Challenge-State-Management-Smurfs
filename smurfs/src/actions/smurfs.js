import axios from 'axios';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const FETCH_SMURFS = 'FETCH_SMURFS';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_ADD = 'ADD_SMURFS_ADD';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_ERROR = 'ADD_SMURFS_ERROR';

const apiUrl = `http://localhost:3333/smurfs`;

export const getSmurfs = smurfs => {
  return {
    type: FETCH_SMURFS,
    smurfs
  };
};

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get(apiUrl)
      .then(res => {
        dispatch(getSmurfs(res.data));
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
      });
  };
}

export const smurfAddSucces = data => {
  return {
    type: ADD_SMURFS_ADD,
    payload: {
      id: data.id,
      name: data.name,
      height: data.height,
      age: data.age
    }
  };
};

export function addSmurf({ name, height, age }) {
  return dispatch => {
    return axios
      .post(`http://localhost:3333/smurfs`, { name, height, age })
      .then(res => {
        dispatch(smurfAddSucces(res.data));
      })
      .catch(err => {
        dispatch({ type: ADD_SMURFS_ERROR, payload: err });
      });
  };
}
