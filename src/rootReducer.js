import { combineReducers } from 'redux';
import { playReducer } from './components/Play/playReducer';
import {quaryReducer} from './components/RecentSearches/RecentSearchesResucer'
export const rootReducer = combineReducers({
  search: playReducer,
  quary: quaryReducer
});