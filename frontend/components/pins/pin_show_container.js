import {connect} from 'react-redux';
import PinShow from './pin_show';
import { updatePin, fetchPins } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { pins }, session: { currentUserId }, errors }, { match: { params } }) => ({
    pins: Object.values(pins),
    chosenPinId: params.pinId,
    errors,
    currentUserId
    //board names
})

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    clearErrors: () => dispatch(clearErrors()),
    updatePin: pin => dispatch(updatePin(pin))
    //edit board
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);