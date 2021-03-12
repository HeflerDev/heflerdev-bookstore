import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';

const App = () => (
  <>
    <h1> BookList </h1>
    <BookList />
    <BookForm />
  </>
);

export default App;
