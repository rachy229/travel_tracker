const lodgingReducer = (state = [], action) => {

    console.log('action in lodgingReducer', action);
    switch (action.type) {
        case 'SET_LODGING':
            return action.payload;
        default:
            return state;
    }
}

export default lodgingReducer;