import { ADD_BOOK, REMOVE_BOOK } from './action-types';

export const addBook = payload => ({ type: ADD_BOOK, payload });
export const removeBook = payload => ({ type: REMOVE_BOOK, payload });
