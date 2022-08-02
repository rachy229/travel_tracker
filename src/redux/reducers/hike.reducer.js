import { combineReducers } from 'redux';

const hikeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HIKES':
            return action.payload;
        default:
            return state;
    }
}

export default (
    hikeReducer
);