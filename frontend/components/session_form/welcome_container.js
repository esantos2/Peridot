import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import Welcome from './welcome';

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
})

export default connect(null, mapDispatchToProps)(Welcome);