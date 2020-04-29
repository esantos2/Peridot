import React from 'react'
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import NavBarContainer from './nav_bar/navbar_container';
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal/>
        <header>
            <NavBarContainer/>
        </header>
    </div>
);

export default App;