import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBook } from '../actions/index';

const mapStateToProps = state => ({ books: state.booksReducer.books });
const select = dispatch => ({ filterBook: book => dispatch(filterBook(book)) });

const ConnectedCategoryFilter = ({ books, filterBook }) => {
  const categories = [...new Set(books.map(item => item.category))];

  const handleChange = event => {
    filterBook(event.target.value);
  };

  return (
    <form>
      <select id="categories" onChange={handleChange}>
        <option value="All">All</option>
        {
          categories.map(item => (
            <option key={item} value={item}>{ item }</option>
          ))
        }
      </select>
    </form>
  );
};

ConnectedCategoryFilter.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterBook: PropTypes.func.isRequired,
};

const CategoryFilter = connect(mapStateToProps, select)(ConnectedCategoryFilter);

export default CategoryFilter;
