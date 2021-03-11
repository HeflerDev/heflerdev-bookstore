import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const mapStateToProps = state => ({ books: state.books });

const ConnectedBookList = ({ books }) => (
  <>
    <table>
      {
        books.map(item => (
          <tbody key={item.title}>
            <Book books={item} />
          </tbody>
        ))
      }
    </table>
  </>
);

ConnectedBookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.string).isRequired,
};

const BookList = connect(mapStateToProps)(ConnectedBookList);

export default BookList;
