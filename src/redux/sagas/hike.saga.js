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

function* hikeSaga() {
    yield takeLatest('GET_HIKES', getHikes);
};

export default hikeSaga;