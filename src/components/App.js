import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';

const App = () => (
  <div className="stack">
    <h1> The Reader&apos;s Emporium  </h1>
    <BookList />
    <BookForm />
    <CategoryFilter />
  </div>
);

export default App;
