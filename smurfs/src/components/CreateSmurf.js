import { connect } from 'react-redux';
import { addSmurf } from '../actions/smurfs';

import SmurfForm from './SmurfForm';

const mapDispatchToProps = dispatch => {
  return {
    onAddSmurf: post => {
      dispatch(addSmurf(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SmurfForm);
