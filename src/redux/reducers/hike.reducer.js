import { combineReducers } from 'redux';

const hikesArray = (state = [], action) => {
    switch (action.type) {
        case 'SET_HIKES':
            return action.payload;
        default:
            return state;
    }
}

const hikeToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_HIKE':
            return action.payload;
        case 'EDIT_HIKE_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        case 'CLEAR_EDIT_HIKE':
            return '';
        default:
            return state;
    }
}

// export default (
//     hikeReducer
// );

export default combineReducers({
    hikesArray,
    hikeToEdit
});