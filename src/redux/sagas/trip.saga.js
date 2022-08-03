import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getTrips() {
    try{
        const response = yield axios.get('/api/trip');
        // yield console.log('response.data in getTrips', response.data);
        yield put({ type: 'SET_TRIPS', payload: response.data });
    }
    catch(error) {
        console.log('error in getTrips', error);
    }
}

function* postTrip(action) {
    try{
        yield axios.post('/api/trip', action.payload);
        yield put({type: 'GET_TRIPS'})
    }
    catch(error){
        console.log('error in postTrip', error);
    }
}

function* deleteTrip(action) {
    try{
        yield axios.delete(`/api/trip/${action.payload}`)
        yield put({type: 'GET_TRIPS'})
        console.log('action.payload in deleteTrip', action.payload)
    }
    catch(error) {
        console.log('error in deleteTrip', error)
    }
}

function* tripSaga() {
    yield takeLatest('GET_TRIPS', getTrips);
    yield takeLatest('POST_TRIP', postTrip);
    yield takeLatest('DELETE_TRIP', deleteTrip);


};

export default tripSaga;