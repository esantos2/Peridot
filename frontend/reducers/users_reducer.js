import {RECEIVE_CURRENT_USER, NEW_USER} from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case NEW_USER:
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        default:
            return state;
    }
}

export default usersReducer;