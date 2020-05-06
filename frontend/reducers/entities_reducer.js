import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';
import boardPinReducer from './board_pins_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pins: pinsReducer,
    boards: boardsReducer,
    boardPins: boardPinReducer
})

export default entitiesReducer;