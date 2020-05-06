import {RECEIVE_BOARD_PINS} from '../actions/board_actions'

const boardPinReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BOARD_PINS:
            return action.boardPins;
        default:
            return state;
    }
}

export default boardPinReducer;