import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getHikes(action) {
    try{
        yield console.log('action.payload in getHikes', action.payload)
        const response = yield axios.get(`/api/hike/${action.payload}`);
        yield console.log('response.data in getHikes', response.data);
        yield put({ type: 'SET_HIKES', payload: response.data });
    }
    catch(error) {
        console.log('error in getHikes', error);
    }
}

function* postHike(action) {
    try{
        yield axios.post('/api/hike', action.payload);
        yield put({type: 'GET_HIKES'})
    }
    catch(error){
        console.log('error in postHike', error);
    }
}

function* deleteHike(action) {
    try{
        yield axios.delete(`/api/hike/${action.payload}`)
        yield put({type: 'GET_HIKES'})
        console.log('action.payload in deleteHike', action.payload)
    }
    catch(error) {
        console.log('error in deleteHike', error)
    }
}

function* hikeSaga() {
    yield takeLatest('GET_HIKES', getHikes);
    yield takeLatest('POST_HIKE', postHike);
    yield takeLatest('DELETE_HIKE', deleteHike);


};

export default hikeSaga;