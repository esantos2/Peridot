import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ processForm }) => {

    const demoUser = (e) => {
        e.preventDefault();
        const user = {
            email: "qween@io",
            password: "password"
        }
        processForm(user);
    }

    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="login-signup">
                    <div><i id="logo" className="fab fa-pinterest"></i></div>
                    <h2>Welcome to Peridot</h2>
                    <div>Find new ideas to try</div>
                    <div className="buttons">
                        <Link to='/login'>
                            <button className="login-button button">Log in</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="signup-button button">Sign up</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className="welcome-demo button" onClick={demoUser}>Demo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;