import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getHikes() {
    try{
        const response = yield axios.get('/api/hike');
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

function* hikeSaga() {
    yield takeLatest('GET_HIKES', getHikes);
    yield takeLatest('POST_HIKE', postHike);

};

export default hikeSaga;