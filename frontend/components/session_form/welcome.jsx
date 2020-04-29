import React from 'react';

const Welcome = ({openModal}) => {
    return (
        <div className="login-signup">
            <button onClick={() => openModal('login')}>Log in</button>
            <button onClick={() => openModal('signup')}>Sign up</button>
        </div>
    )
}

export default Welcome;