import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchTopHeadlines } from '../../utils/API';

/**********SAGAS***********/

function* getTopHeadlines() {
    try {
        const topHeadlinesNews = yield call(fetchTopHeadlines);
        yield put(receiveTopHeadlinesData(topHeadlinesNews))
    } catch (error) {
        
    }
}

export function* topHeadlinesSaga() {
    yield all([
        takeLatest(REQUEST_TOPHEADLINES_DATA, getTopHeadlines)
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_TOPHEADLINES_DATA = 'REQUEST_TOPHEADLINES_DATA';
export const RECEIVE_TOPHEADLINES_DATA = "RECEIVE_TOPHEADLINES_DATA";

export const requestTopHeadlinesData = () => ({type: REQUEST_TOPHEADLINES_DATA});
export const receiveTopHeadlinesData = (data) => ({type: RECEIVE_TOPHEADLINES_DATA, data})

/**********REDUCER***********/

export default (state={}, {type, data}) => {
    switch(type) {
        case RECEIVE_TOPHEADLINES_DATA: 
            return data;
        default: 
            return state;
    }
}