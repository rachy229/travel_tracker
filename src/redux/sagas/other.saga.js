import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getOther() {
    try{
        const response = yield axios.get('/api/other');
        yield console.log('response.data in getOther', response.data);
        yield put({ type: 'SET_OTHER', payload: response.data });
    }
    catch(error) {
        console.log('error in getOther', error);
    }
}

function* otherSaga() {
    yield takeLatest('GET_OTHER', getOther);
    // yield takeLatest('POST_HIKE', postHike);
    // yield takeLatest('DELETE_HIKE', deleteHike);


};

export default otherSaga;