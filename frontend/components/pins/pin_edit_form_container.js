import { connect } from 'react-redux';
import EditPinForm from './pin_edit_form';
import { updatePin, deletePin } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => ({
    
    //board names
})

const mapDispatchToProps = dispatch => ({
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId))
    //edit board
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);