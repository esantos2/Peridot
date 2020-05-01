export const selectUserPins = (pins, userId) => {
    let userPins = [];
    Object.values(pins).forEach(pin => {
        if (pin.userId === userId) userPins.push(pin);
    })
    return userPins;
};

export const selectBoardPins = (pins, userId, boardId) => {
    let boardPins = [];
    
}

export const selectSuggestedPins = (pins, userId) => {
    let suggestedPins = [];
    Object.values(pins).forEach( pin => {
        if (pin.userId !== userId) suggestedPins.push(pin);
    })
    return suggestedPins;
};