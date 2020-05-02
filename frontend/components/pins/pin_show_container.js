import {connect} from 'react-redux';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId]
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);