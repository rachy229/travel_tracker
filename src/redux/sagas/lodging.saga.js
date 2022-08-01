import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getLodging() {
    try{
        const response = yield axios.get('/api/lodging');
        const lodgingArray = response.data;
        yield console.log('lodgingArray in getLodging', lodgingArray);
    }
    catch(error) {
        console.log('error in getLodging', error)
    }
}

function* lodgingSaga() {
    yield takeLatest('GET_LODGING', getLodging);
};

export default lodgingSaga;