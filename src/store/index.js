import { createStore, combineReducers } from 'redux';
import booksReducer from '../reducers/books';
import filterReducer from '../reducers/filters';

const rootReducer = combineReducers({
  booksReducer,
  filterReducer,
});

const store = createStore(rootReducer);

export default store;
