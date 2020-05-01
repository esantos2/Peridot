import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import usersErrorsReducer from './users_errors_reducer';
import pinsErrorsReducer from './pins_errors_reducer';
import boardsErrorsReducer from './boards_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    users: usersErrorsReducer,
    pins: pinsErrorsReducer,
    boards: boardsErrorsReducer
});

export default errorsReducer;