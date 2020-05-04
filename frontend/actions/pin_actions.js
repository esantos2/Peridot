import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

export const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
})

export const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
})

export const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
})

export const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
})

export const fetchPins = () => dispatch => {
    return PinAPIUtil.fetchPins()
        .then( pins => dispatch(receivePins(pins)),
        error => dispatch(receivePinErrors(error.responseJSON)))
}

export const fetchPin = pinId => dispatch => {
    return PinAPIUtil.fetchPin(pinId)
        .then( pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON)))
}

export const createPin = pin => dispatch => {
    return PinAPIUtil.createPin(pin)
        .then( pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON)))
}

export const updatePin = pin => dispatch => {
    return PinAPIUtil.updatePin(pin)
        .then( pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON)))
}

export const deletePin = pinId => dispatch => {
    return PinAPIUtil.deletePin(pinId)
        .then( pinId => dispatch(removePin(pinId)),
        error => dispatch(receivePinErrors(error.responseJson)))
}