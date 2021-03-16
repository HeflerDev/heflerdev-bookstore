import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => {
  const { id, title, category } = books;
  if (id !== null) {
    return (
      <div className="queue column">
        <div className="book-prop" key={`${id}-${title}`}>{ title }</div>
        <div className="book-prop" key={`${id}-${category}`}>{ category }</div>
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
  }).isRequired,
};

export default Book;
