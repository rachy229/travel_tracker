const specificLodgingIDReducer = (state = (''), action) => {
    // console.log('action.payload in specificLodgingReducer', action.payload);
    // console.log('action.type in specificLodgingReducer', action.type);

    switch (action.type) {
        case 'THIS_LODGING_ID':
            return action.payload;
        default:
            return state;
    }
}

export default specificLodgingIDReducer;