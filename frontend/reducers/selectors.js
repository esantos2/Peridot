export const selectUserPins = (pins, userId) => {
    let userPins = [];
    Object.values(pins).forEach(pin => {
        if (pin.userId === userId) userPins.push(pin);
    })
    return userPins;
};

export const selectOtherUsersPins = (pins, userId) => {
    let selectedPins = [];
    Object.values(pins).forEach(pin => {
        if (pin.userId !== userId) selectedPins.push(pin);
    })
    return selectedPins;
}

export const selectSuggestedPins = (pins, userId, pinId) => {
    //select based on category, ignore currently viewed pin
    let suggestedPins = [];
    Object.values(pins).forEach( pin => {
        if (pin.id === pinId) return;
        if (pin.category === pins[pinId].category) suggestedPins.push(pin);
        // if ((pin.userId !== userId) && (pin.category === pins[pinId].category)) suggestedPins.push(pin);
    })
    return suggestedPins;
};

export const selectBoardPins = (boardPins, pins, boardId) => {
    if (Object.values(boardPins).length === 0) return [];
    let pinIds = [];
    let pinsOnBoard = [];
    Object.values(boardPins).forEach( bp => {
        if (bp.boardId === boardId) pinIds.push(bp.pinId)
    })
    for(let i = 0; i < pinIds.length; i++){
        pinsOnBoard.push(pins[pinIds[i]]);
    }
    return pinsOnBoard;
}