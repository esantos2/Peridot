import React from 'react'
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import WelcomeContainer from './session_form/welcome_container';
import PinIndexContainer from './pins/pin_index_container';

const App = () => (
    <div>
        <header>
            <ProtectedRoute path="/" component={NavBarContainer} />
        </header>

        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={WelcomeContainer} />
            <ProtectedRoute path="/home" component={PinIndexContainer} />
        </Switch>

        
    </div>
);

export default App;