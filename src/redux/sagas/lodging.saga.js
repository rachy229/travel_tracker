import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getLodging(action) {
    try{
        yield console.log('action in getLodging', action.payload)
        const response = yield axios.get(`/api/lodging/${action.payload}`);
        yield console.log('response.data in getLodging', response.data);
        yield put({ type: 'SET_LODGING', payload: response.data });
    }
    catch(error) {
        console.log('error in getLodging', error);
    }
}

function* getThisLodging(action) {
    try{
        const response = yield axios.get(`/api/lodging/${action.payload}`);
        yield console.log('response.data in getThisLodging', response.data);
    }
    catch(error) {
        console.log('error in getThisLodging', error);
    }
}

function* postLodging(action) {
    try{
        yield axios.post('/api/lodging', action.payload);
        yield put({type: 'GET_LODGING', payload: action.payload.tripId})
        console.log('action.payload in postLodging', action.payload)
    }
    catch(error){
        console.log('error in postLodging', error);
    }
}

function* editLodging(id) {
    try{
        yield axios.put('/api/lodging', id)
        yield put({type: 'GET_LODGING'})
        console.log('id in editLodging', id)
    }
    catch(error){
        console.log('error in editLodging', error)
    }
}

function* deleteLodging(action) {
    try{
        yield axios.delete(`/api/lodging/${action.payload.id}`)
        yield put({type: 'GET_LODGING', payload: action.payload.tripId})
        yield console.log('action.payload in deleteLodging', action.payload)
    }
    catch(error) {
        console.log('error in deleteLodging', error)
    }
}

function* lodgingSaga() {
    yield takeLatest('GET_LODGING', getLodging);
    yield takeLatest('GET_THIS_LODGING', getThisLodging);
    yield takeLatest('POST_LODGING', postLodging);
    yield takeLatest('EDIT_LODGING', editLodging);
    yield takeLatest('DELETE_LODGING', deleteLodging);


};

export default lodgingSaga;