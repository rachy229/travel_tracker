import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFlights(action) {
    try{
        const response = yield axios.get(`/api/flight/${action.payload}`);
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

function* deleteFlight(action) {
    try{
        yield axios.delete(`/api/flight/${action.payload}`)
        yield put({type: 'GET_FLIGHTS'})
        console.log('action.payload in deleteFlight', action.payload)
    }
    catch(error) {
        console.log('error in deleteFlight', error)
    }
}

function* flightSaga() {
    yield takeLatest('GET_FLIGHTS', getFlights);
    yield takeLatest('POST_FLIGHT', postFlight);
    yield takeLatest('DELETE_FLIGHT', deleteFlight);

};

export default flightSaga;