import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const mapStateToProps = state => ({ books: state.books });
const select = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

const ConnectedBookList = ({ books, removeBook }) => {
  const { id, title } = books;

  const handleClick = event => {
    event.preventDefault();
    const bookObj = event.target.value;
    removeBook(bookObj);
  };

  return (
    <>
      <table>
        {
          books.map(item => (
            <tbody key={title}>
              <tr>
                <Book books={item} />
                <td>
                  <button type="button" onClick={handleClick} id={id} value={item}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </>
  );
};

ConnectedBookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.string).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const BookList = connect(mapStateToProps, select)(ConnectedBookList);

export default BookList;
