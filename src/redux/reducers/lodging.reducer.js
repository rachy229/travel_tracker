const lodging = (state, [], action) => {
    switch (action.type) {
        case 'SET_LODGING':
            return action.payload;
        default:
            return state;
    }
}

export default lodging;