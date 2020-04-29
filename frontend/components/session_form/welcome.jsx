import React from 'react';

const Welcome = ({openModal}) => {

    const demoUser = (e) => {
        e.preventDefault();
        const user = {
            email: "qween@io",
            password: "password"
        }
        dispatch(login(user)).then(this.props.closeModal);
    }

    return (
        <div className="login-signup">
            <div><i id="logo" className="fab fa-pinterest"></i></div>
            <h2>Welcome to Peridot</h2>
            <div>Find new ideas to try</div>
            <div className="buttons">
                <button className="login-button" onClick={() => openModal('login')}>Log in</button>
                <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
                {/* <button className="demo login-button" onClick={this.demoUser}>Demo</button> */}
            </div>
        </div>
    )
}

export default Welcome;