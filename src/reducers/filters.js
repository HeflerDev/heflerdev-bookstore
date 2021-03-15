import { FILTER_BOOK } from '../actions/action-types';

function filterReducer(state = 'All', action) {
  switch (action.type) {
    case FILTER_BOOK:
      return { filter: action.payload };
    default:
      return state;
  }
}

export default filterReducer;
