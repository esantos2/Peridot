export const fetchPins = () => {
    return $.ajax({
        url: "/api/pins",
        method: "GET"
    })
}

export const fetchPin = pinId => {
    return $.ajax({
        url: `/api/pins/${pinId}`,
        method: "GET"
    })
}

export const createPin = pin => {
    return $.ajax({
        url: "/api/pins",
        method: "POST",
        data: pin,
        contentType: false,
        processData: false
    })
}

export const updatePin = pin => {
    return $.ajax({
        url: `/api/pins/${pin.id}`,
        method: "PATCH",
        data: {pin}
    })
}

export const deletePin = pinId => {
    return $.ajax({
        url: `/api/pins/${pinId}`,
        method: "DELETE"
    })
}

export const saveToBoard = (board_pin) => {
    return $.ajax({
        url: `/api/board_pins`,
        method: "POST",
        data: {board_pin}
    })
}