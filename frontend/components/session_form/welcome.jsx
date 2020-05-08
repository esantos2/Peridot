import React from 'react';
import { Link } from 'react-router-dom';
import PinIndex from '../pins/pin_index';

const Welcome = ({ processForm, fetchPins }) => {

    const demoUser = (e) => {
        e.preventDefault();
        const user = {
            email: "demouser@gmail.com",
            password: "123456"
        }
        processForm(user);
    }

    return (
        <div>
            {/* <div className="background-pins">
                <PinIndex getInfo={fetchPins}/>
            </div> */}
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
        </div>
    )
}

export default Welcome;