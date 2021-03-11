import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  books: state.books,
});

const ConnectedBook = ({ books }) => (
  <tbody>
    {
      books.map(book => {
        const { id, title, category } = book;
        return (
          <tr key={id + title + category}>
            <td key={id}>{ id }</td>
            <td key={id + title}>{ title }</td>
            <td key={id + category}>{ category }</td>
          </tr>
        );
      })
    }
  </tbody>
);

ConnectedBook.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

ConnectedBook.defaultProps = {
  books: [],
};

const Book = connect(mapStateToProps)(ConnectedBook);

export default Book;
