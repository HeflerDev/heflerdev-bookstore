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
    category: '',
  });

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
    event.preventDefault();
    const { title, category } = state;
    props.addBook({
      title,
      category,
      id: Math.floor(Math.random() * (10000 - 100) + 10000),
    });
    setState({
      id: null,
      title: '',
      category: 'Action',
    });
  };

  const { title } = state;
  return (
    <form onSubmit={handleSubmit}>
      <h2> Form </h2>
      <div>
        <label htmlFor="title">
          Title
          <input type="text" id="title" value={title} onChange={handleChange} />
        </label>
      </div>

      <div>
        <label htmlFor="category">
          Category
          <select id="category" onChange={handleChange}>
            {
              bookCategories.map(cat => (
                <option key={cat} value={cat}>{ cat }</option>
              ))
            }
          </select>
        </label>
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

ConnectedForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const Form = connect(null, select)(ConnectedForm);

export default Form;
