import { fork, all } from 'redux-saga/effects';
import { topHeadlinesSaga } from './ducks/topHeadlines';

export default function* rootSaga() {
    yield all([
        fork(topHeadlinesSaga)
    ])
}