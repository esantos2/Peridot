import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const NEW_USER = "NEW_USER";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = errors =>({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const newUserDetails = currentUser => ({
    type: NEW_USER,
    currentUser
})

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then( user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveSessionErrors(error.responseJSON)))
}

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then( user => dispatch(receiveCurrentUser(user)),
            (error) => dispatch(receiveSessionErrors(error.responseJSON)))
}

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()),
            error => dispatch(receiveSessionErrors(error.responseJSON)))
}

export const createNewUser = user => dispatch => {
    return APIUtil.signup(user)
        .then( (user) => dispatch(newUserDetails(user)),
            error => dispatch(receiveSessionErrors(error.responseJSON)))
}