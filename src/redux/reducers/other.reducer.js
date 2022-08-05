import { combineReducers } from 'redux';

const otherArray = (state = [], action) => {
    switch (action.type) {
        case 'SET_OTHER':
            return action.payload;
        default:
            return state;
    }
}

const otherToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_OTHER':
            return action.payload;
        case 'EDIT_OTHER_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        case 'CLEAR_EDIT_OTHER':
            return '';
        default:
            return state;
    }
}

// export default (
//     otherReducer
// );

export default combineReducers({
    otherArray,
    otherToEdit
});