import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//begin testing
import {fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard} from './actions/board_actions'
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
    window.fetchBoards = fetchBoards;
    window.fetchBoard = fetchBoard;
    window.createBoard = createBoard;
    window.updateBoard = updateBoard;
    window.deleteBoard = deleteBoard;
    //end testing

    ReactDOM.render(<Root store={store} />, root);
})