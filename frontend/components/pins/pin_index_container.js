import {connect} from 'react-redux';
import { fetchPins, fetchPin } from '../../actions/pin_actions';
import PinIndex from './pin_index';

const mapStateToProps = state => ({
    pins: state.entities.pins
})

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);