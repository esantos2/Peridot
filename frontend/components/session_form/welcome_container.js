import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import { fetchPins } from '../../actions/pin_actions';
import Welcome from './welcome';

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    fetchPins: () => dispatch(fetchPins())
})

export default connect(null, mapDispatchToProps)(Welcome);