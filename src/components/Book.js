import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => {
  const {
    id,
    title,
    category,
    author,
  } = books;

  if (id !== null) {
    return (
      <div className="queue column">
        <div className="book-prop book-prop-category" key={`${id}-${category}`}>{ category }</div>
        <div className="book-prop book-prop-title" key={`${id}-${title}`}>{ title }</div>
        <div className="book-prop book-prop-author" key={`${id}-${author}`}>{ author }</div>
      </div>
    );
  }
  return null;
};

Book.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
