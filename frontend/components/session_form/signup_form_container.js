import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={ () => dispatch(openModal('login')) }>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);