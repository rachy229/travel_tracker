import { combineReducers } from 'redux';

const otherReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OTHER':
            return action.payload;
        default:
            return state;
    }
}

export default (
    otherReducer
);