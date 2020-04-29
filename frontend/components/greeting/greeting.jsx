import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const loggedin = () =>  {
        return (
            <nav className="header-logout">
                <div className="icon logo"><i className="fab fa-pinterest"></i></div>
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
            <div className="header-login-signup">
                <Link to="/signup">Sign Up</Link>
                <br></br>
                <Link to="/login">Login</Link>
            </div>
        )
    }

    return currentUser ? loggedin() : notLoggedIn();
}

export default Greeting;