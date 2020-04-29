import React from 'react';

const Greeting = ({currentUser, logout, openModal}) => {

    const loggedin = () =>  {
        return (
            <nav className="header-logout">
                <div className="icon"><i id="logo" className="fab fa-pinterest"></i></div>
                <div className="home-button">Home</div>
                <div className="search-bar">Peridot!</div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/erick-santos2/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/Arctive" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="icon profile"><i className="fas fa-user"></i></div>
                <div className="logout-button"><button onClick={logout} >Logout</button></div>
            </nav>
        )
    }

    const notLoggedIn = () => {
        return (
            <div className="login-signup">
                <button onClick={ () => openModal('login')}>Log in</button>
                <br></br>
                <button onClick={ () => openModal('signup')}>Sign up</button>
            </div>
        )
    }

    return currentUser ? loggedin() : notLoggedIn();
}

export default Greeting;