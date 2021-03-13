import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  filter: state.filterReducer.filter,
});
const select = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

const ConnectedBookList = ({ books, filter, removeBook }) => {
  const handleClickOnDeleteButton = event => {
    event.preventDefault();
    const bookId = event.target.id;
    removeBook({ bookId });
  };

  return (
    <>
      <table>
        {
          books.map(item => {
            const { id, title, category } = item;
            if (filter === category || filter === 'All') {
              return (
                <tbody key={title}>
                  <tr>
                    <Book books={item} />
                    <td>
                      <button type="button" onClick={handleClickOnDeleteButton} id={id}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            }
            return null;
          })
        }
      </table>
    </>
  );
};

ConnectedBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

ConnectedBookList.defaultProps = {
  filter: 'All',
};

const BookList = connect(mapStateToProps, select)(ConnectedBookList);

export default BookList;
