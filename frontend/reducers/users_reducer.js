import {RECEIVE_CURRENT_USER, NEW_USER} from '../actions/session_actions';
import {UPDATE_USER_DETAILS} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case NEW_USER:
        case UPDATE_USER_DETAILS:
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        default:
            return state;
    }
}

export default usersReducer;