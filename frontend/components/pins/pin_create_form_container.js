import {connect} from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';

const mapStateToProps = ({entities, session}) => ({
    owner: entities.users[session.currentUserId]
    //board names
})

const mapDispatchToProps = dispatch => ({
    createPin: pin => dispatch(createPin(pin))
    //edit boards
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);