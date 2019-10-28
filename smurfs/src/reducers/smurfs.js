import {
  FETCH_SMURFS_START,
  FETCH_SMURFS,
  ADD_SMURFS_START,
  ADD_SMURF
} from '../actions/smurfs';

const initialState = {
  smurfs: [],
  smurf: null,
  getSmurfs: null,
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false
      };

    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.smurfs
      };
    default:
      return state;
  }
}
