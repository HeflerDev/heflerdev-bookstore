import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';
import CategoryFilter from '../containers/CategoryFilter';
// import CategoryFilter from '../containers/CategoryFilter';

const App = () => (
  <main className="stack">
    <nav className="queue between">
      <div className="queue">
        <h1> Bookstore CMS  </h1>
        <div>Books</div>
        <CategoryFilter />
      </div>
      <div className="profile-thumb" />

    </nav>
    <div className="closure">
      <BookList />
      <hr />
      <BookForm />
    </div>
  </main>
);

export default App;
