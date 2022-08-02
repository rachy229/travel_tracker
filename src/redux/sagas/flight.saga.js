import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFlights() {
    try{
        const response = yield axios.get('/api/flight');
        yield console.log('response.data in getFlights', response.data);
        yield put({ type: 'SET_FLIGHTS', payload: response.data });
    }
    catch(error) {
        console.log('error in getFlights', error);
    }
}

function* postFlight(action) {
    try{
        yield axios.post('/api/flight', action.payload);
        yield put({type: 'GET_FLIGHTS'})
    }
    catch(error){
        console.log('error in postFlight', error);
    }
}

function* flightSaga() {
    yield takeLatest('GET_FLIGHTS', getFlights);
    yield takeLatest('POST_FLIGHT', postFlight);

};

export default flightSaga;