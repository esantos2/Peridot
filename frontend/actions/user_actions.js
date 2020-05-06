import * as UserAPIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const updateDetails = user => dispatch => {
    return UserAPIUtil.updateUser(user)
        .then( u => dispatch(receiveCurrentUser(u)),
        error => dispatch(receiveUserErrors(error.responseJSON)))
}

export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then( user => dispatch(receiveAllUsers(user)),
        error => dispatch(receiveUserErrors(error.responseJSON)))
}

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)),
            error => dispatch(receiveUserErrors(error.responseJSON)))
}