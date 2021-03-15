import { ADD_BOOK, REMOVE_BOOK, FILTER_BOOK } from './action-types';

export const addBook = payload => ({ type: ADD_BOOK, payload });
export const removeBook = payload => ({ type: REMOVE_BOOK, payload });
export const filterBook = payload => ({ type: FILTER_BOOK, payload });
