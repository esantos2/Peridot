import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <Link to="/signup">Sign Up</Link>
    )
})

export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);