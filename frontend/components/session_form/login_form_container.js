import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={ () => dispatch(openModal('signup')) }>
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);