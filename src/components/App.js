import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';

const App = () => (
  <>
    <h1> BookList </h1>
    <BookList />
    <BookForm />
    <CategoryFilter />
  </>
);

export default App;
