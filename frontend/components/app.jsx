import React from 'react'
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal/>
        <header>
            <GreetingContainer />
        </header>
    </div>
);

export default App;