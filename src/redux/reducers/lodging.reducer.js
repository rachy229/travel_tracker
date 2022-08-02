import { combineReducers } from 'redux';

const lodgingReducer = (state = [], action) => {

    console.log('action.payload in lodgingReducer', action.payload);
    console.log('action.type in lodgingReducer', action.type);

    switch (action.type) {
        case 'SET_LODGING':
            return action.payload;
        default:
            return state;
    }
}


export default (
    lodgingReducer
);