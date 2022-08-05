import { combineReducers } from 'redux';

const tripReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRIPS':
            return action.payload;
        default:
            return state;
    }
}

const tripId = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TRIP_ID':
            return action.payload;
        default:
            return state;
    }
}

const thisTrip = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_TRIP':
            return action.payload;
        default:
            return state;
    }
}

const tripToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_TRIP':
            return action.payload;
        case 'EDIT_TRIP_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        case 'CLEAR_EDIT_TRIP':
            return '';
        default:
            return state;
    }
}

export default combineReducers({
    tripReducer,
    tripId,
    thisTrip,
    tripToEdit,
});
