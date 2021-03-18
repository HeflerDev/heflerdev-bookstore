import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addBook } from '../actions/index';

const select = dispatch => ({
  addBook: book => dispatch(addBook(book)),
});

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const ConnectedForm = props => {
  const [state, setState] = useState({
    title: '',
    category: 'Action',
  });

  const handleValidation = () => {
    if (state.title === '') {
      return false;
    }
    return true;
  };

  const handleChange = event => {
    switch (event.target.id) {
      case 'title':
        setState({
          title: event.target.value,
          category: state.category,
        });
        break;
      case 'category':
        setState({
          title: state.title,
          category: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    if (handleValidation()) {
      event.preventDefault();
      const { title, category } = state;
      props.addBook({
        title,
        category,
        id: Math.floor(Math.random() * (10000 - 100) + 10000),
        author: 'Mock Author',
      });
      setState({
        id: null,
        title: '',
        category,
      });
    }
  };

  const { title } = state;
  return (
    <form onSubmit={handleSubmit} className="stack">
      <h2> Add New Book </h2>
      <div className="board between">
        <div className="col-12 col-m-4">
          <label htmlFor="title">
            <input type="text" placeholder="Book Title" id="title" value={title} onChange={handleChange} />
          </label>
        </div>
        <div className="col-12 col-m-3">
          <label htmlFor="category" className="queue around dropdown">
            <select id="category" className="dropdown-menu" onChange={handleChange}>
              {
                bookCategories.map(cat => (
                  <option key={cat} value={cat}>{ cat }</option>
                ))
              }
            </select>
          </label>
        </div>
        <button type="submit" className="col-12 col-m-2 submit-btn">Save</button>
      </div>
    </form>
  );
};

ConnectedForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const Form = connect(null, select)(ConnectedForm);

export default Form;
