import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//begin testing
// import {fetchPins, fetchPin, createPin, updatePin, removePin} from './util/pin_api_util';
// import {fetchPins, fetchPin, createPin, updatePin, removePin} from './actions/pin_actions'
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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.fetchPins = fetchPins;
    // window.fetchPin = fetchPin;
    // window.createPin = createPin;
    // window.updatePin = updatePin;
    // window.removePin = removePin;
    // window.fetchPin = fetchPin;
    // window.createPin = createPin;
    // window.removePin = removePin;
    //end testing

    ReactDOM.render(<Root store={store} />, root);
})