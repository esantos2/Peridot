import { connect } from 'react-redux';
import { clearErrors, createNewUser } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    clearErrors: () => dispatch(clearErrors()),
    createNewUser: user => dispatch(createNewUser(user)),
    processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);