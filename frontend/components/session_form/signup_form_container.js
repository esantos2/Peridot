import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    inputs: {}
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);