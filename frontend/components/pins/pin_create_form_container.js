import {connect} from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({entities, errors, session}) => ({
    owner: entities.users[session.currentUserId],
    errors: errors.pins
    //board names
})

const mapDispatchToProps = dispatch => ({
    createPin: pin => dispatch(createPin(pin)),
    clearErrors: () => dispatch(clearErrors())
    //edit boards
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);