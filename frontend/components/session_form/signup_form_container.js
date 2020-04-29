import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <Link to='/login'>Login</Link>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);