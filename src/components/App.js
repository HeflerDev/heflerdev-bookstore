import React from 'react';
import BookList from './BookList';
import BookForm from '../containers/BooksForm';

const App = () => (
  <>
    <h1> BookList </h1>
    <BookList />
    <BookForm />
  </>
);

export default App;
