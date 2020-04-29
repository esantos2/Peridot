import React from 'react';

const Welcome = ({openModal}) => {
    return (
        <div className="login-signup">
            <div><i id="logo" className="fab fa-pinterest"></i></div>
            <h2>Welcome to Peridot</h2>
            <div>Find new ideas to try</div>
            <div className="buttons">
                <button onClick={() => openModal('login')}>Log in</button>
                <button onClick={() => openModal('signup')}>Sign up</button>
            </div>
        </div>
    )
}

export default Welcome;