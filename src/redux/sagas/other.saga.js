import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getOther(action) {
    try{
        const response = yield axios.get(`/api/other/${action.payload}`);
        yield console.log('response.data in getOther', response.data);
        yield put({ type: 'SET_OTHER', payload: response.data });
    }
    catch(error) {
        console.log('error in getOther', error);
    }
}

function* postOther(action) {
    try{
        yield axios.post('/api/other', action.payload);
        yield put({type: 'GET_OTHER', payload: action.payload.tripId})
    }
    catch(error){
        console.log('error in postOther', error);
    }
}

function* deleteOther(action) {
    try{
        yield axios.delete(`/api/other/${action.payload.id}`)
        yield put({type: 'GET_OTHER', payload: action.payload.tripId})
        console.log('action.payload in deleteOther', action.payload.tripId)
    }
    catch(error) {
        console.log('error in deleteOther', error)
    }
}

function* otherSaga() {
    yield takeLatest('GET_OTHER', getOther);
    yield takeLatest('POST_OTHER', postOther);
    yield takeLatest('DELETE_OTHER', deleteOther);


};

export default otherSaga;