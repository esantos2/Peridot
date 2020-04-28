import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const loggedin = () =>  {
        return (
            <div className="header-logout">
                <h1>Peridot!</h1>
                <h2>{currentUser.username}</h2>
                <button onClick={logout} >Logout</button>
            </div>
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