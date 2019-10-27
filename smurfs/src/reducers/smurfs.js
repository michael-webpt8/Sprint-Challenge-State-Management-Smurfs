import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  ADD_SMURFS
} from '../components/actions/smurfs';

const initialState = {
  smurfs: null,
  getSmurfs: null,
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: state.smurfs.concat(state.getSmurfs),
        isLoading: false
      };
    default:
      return state;
  }
}
