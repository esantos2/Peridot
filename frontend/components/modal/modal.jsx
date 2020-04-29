import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import WelcomeContainer from '../session_form/welcome_container';

const Modal = ({modal, closeModal}) => {

    if (!modal) return null;

    let component;
    let addClick = false;

    switch(modal){
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'welcome':
            component = <WelcomeContainer />;
            break;
        case 'pin':
            addClick = true;
            //pin container
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={addClick ? closeModal : null }>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);