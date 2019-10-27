import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const ADD_SMURF = 'ADD_SMURF';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';

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
        throw err;
      });
  };
}

export const smurfAddSucces = data => {
  return {
    type: ADD_SMURF,
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
        throw err;
      });
  };
}
