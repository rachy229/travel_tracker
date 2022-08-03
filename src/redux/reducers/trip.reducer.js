import { combineReducers } from 'redux';

const tripReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRIPS':
            return action.payload;
        default:
            return state;
    }
}

export default (
    tripReducer
);