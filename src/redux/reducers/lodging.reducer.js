import { combineReducers } from 'redux';

const lodgingArray = (state = [], action) => {

    // console.log('action.payload in lodgingReducer', action.payload);
    // console.log('action.type in lodgingReducer', action.type);

    switch (action.type) {
        case 'SET_LODGING':
            return action.payload;
        default:
            return state;
    }
}

const lodgingToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_LODGING':
            return action.payload;
        case 'EDIT_LODGING_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        case 'CLEAR_EDIT_LODGING':
            return '';
        default:
            return state;
    }
}

const thisLodging = (state = {}, action) => {
    switch (action.type) {
        case 'SET_THIS_LODGING':
            return action.payload;
        default:
            return state;
    }
}


// export default (
//     lodgingReducer
// );

export default combineReducers({
    lodgingArray,
    lodgingToEdit,
    thisLodging
});