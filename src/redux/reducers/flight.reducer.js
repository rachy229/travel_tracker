import { combineReducers } from 'redux';

const flightReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FLIGHTS':
            return action.payload;
        default:
            return state;
    }
}

const flightToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_FLIGHT':
            return action.payload;
        case 'EDIT_FLIGHT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            };
        case 'CLEAR_EDIT_FLIGHT':
            return {date: '',airline: '', arrival_time: '', departure_time: '', flight_number: ''}
        default:
            return state;
    }
}

// export default (
//     flightReducer
// );

export default combineReducers({
    flightReducer,
    flightToEdit
});