import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => {
  const { id, title, category } = books;
  if (id !== null) {
    return (
      <>
        <td key={id}>{ id }</td>
        <td key={id + title}>{ title }</td>
        <td key={id + category}>{ category }</td>
      </>
    );
  }
  return null;
};

Book.propTypes = {
  books: PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
