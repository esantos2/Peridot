import * as UserAPIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const updateDetails = user => dispatch => {
    return UserAPIUtil.updateUser(user)
        .then( u => dispatch(receiveCurrentUser(u)),
        error => dispatch(receiveUserErrors(error.responseJSON)))
}