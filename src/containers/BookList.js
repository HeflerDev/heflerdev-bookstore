import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const mapStateToProps = state => ({ books: state.books });
const select = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

const ConnectedBookList = ({ books, removeBook }) => {
  // const { id, title } = books;

  const handleClick = event => {
    event.preventDefault();
    const bookId = event.target.id;
    removeBook({ bookId });
  };

  return (
    <>
      <table>
        {
          books.map(item => {
            const { id, title } = item;
            return (
              <tbody key={title}>
                <tr>
                  <Book books={item} />
                  <td>
                    <button type="button" onClick={handleClick} id={id}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        }
      </table>
    </>
  );
};

ConnectedBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const BookList = connect(mapStateToProps, select)(ConnectedBookList);

export default BookList;
