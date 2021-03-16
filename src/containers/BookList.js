import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import BookStatus from '../components/BookStatus';
import BookInfo from '../components/BookInfo';
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
      <div className="stack">
        {
          books.map(item => {
            const { id, title, category } = item;
            if (filter === category || filter === 'All') {
              return (

                <div key={title} className="board col-12">
                  <div className="board col-12 col-m-6 col-l-4">
                    <div className="col-12">
                      <Book books={item} />
                    </div>
                    <div className="col-12 queue">
                      <button className="book-btn" type="button" onClick={handleClickOnDeleteButton} id={id}>
                        Comments
                      </button>
                      <button className="book-btn" type="button" onClick={handleClickOnDeleteButton} id={id}>
                        Delete
                      </button>
                      <button className="book-btn" type="button" onClick={handleClickOnDeleteButton} id={id}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-m-6 col-l-4 bookstatus-big-container">
                    <BookStatus />
                  </div>
                  <div className="col-12 col-l-4">
                    <BookInfo />
                  </div>
                </div>
              );
            }
            return null;
          })
        }
      </div>
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
