import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getLodging() {
    try{
        const response = yield axios.get('/api/lodging');
        yield console.log('response.data in getLodging', response.data);
        yield put({ type: 'SET_LODGING', payload: response.data });
    }
    catch(error) {
        console.log('error in getLodging', error);
    }
}

function* postLodging(action) {
    try{
        yield axios.post('/api/lodging', action.payload);
        yield put({type: 'GET_LODGING'})
    }
    catch(error){
        console.log('error in postLodging', error);
    }
}

function* lodgingSaga() {
    yield takeLatest('GET_LODGING', getLodging);
    yield takeLatest('POST_LODGING', postLodging);
};

export default lodgingSaga;