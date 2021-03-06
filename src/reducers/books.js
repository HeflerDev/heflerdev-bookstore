import { ADD_BOOK, REMOVE_BOOK } from '../actions/action-types';

function booksReducer(state = { books: [] }, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { books: state.books.filter(item => action.payload.bookId !== item.id.toString()) };
    default:
      return state;
  }
}

export default booksReducer;
