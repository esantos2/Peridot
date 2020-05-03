import { connect } from 'react-redux';
import EditPinForm from './pin_edit_form';
import { updatePin, deletePin } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({entities: {pins}, session: {currentUserId}, errors}, {match: {params}}) => ({
    pin: pins[params.pinId],
    errors,
    currentUserId
    //board names
})

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors()),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId))
    //edit board
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);