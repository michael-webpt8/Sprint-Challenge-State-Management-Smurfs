import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS,
  FETCH_SMURFS_ERROR,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_ADD,
  ADD_SMURFS_ERROR
} from '../actions/smurfs';

const initialState = {
  smurfs: null,
  smurf: null,
  //  getSmurfs: null,
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
    case ADD_SMURFS_ADD:
      return {
        ...state,
        smurfs: state.smurfs.concat({ smurf: action.payload }),
        isLoading: false
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case ADD_SMURFS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    // case FETCH_SMURFS_SUCCESS:
    //   return {
    //     ...state,
    //     smurfs: action.payload,
    //     isLoading: false
    //   };
    case FETCH_SMURFS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.smurfs
      };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
}
