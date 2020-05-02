import {connect} from 'react-redux';
import PinShow from './pin_show';
import { fetchPin } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);