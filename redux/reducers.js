import { combineReducers } from 'redux';
import reducerTopHeadlines from './ducks/topHeadlines';

export default combineReducers({
    topHeadlines: reducerTopHeadlines
})