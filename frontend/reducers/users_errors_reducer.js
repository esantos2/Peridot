import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

const usersErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default usersErrorsReducer;