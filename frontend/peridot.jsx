import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//begin testing
// import {signup, login, logout} from './util/session_api_util';
//end tetsting

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { currentUserId: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //begin testing 
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    //end testing

    ReactDOM.render(<Root store={store} />, root);
})