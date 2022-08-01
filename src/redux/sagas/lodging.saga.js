import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getLodging() {
    try{
        const lodgingArray = yield axios.get('/api/lodging');
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