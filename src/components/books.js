import React from 'react';
import BookInput from './addBook';
import BookList from './bookList';

const Books = () => (
  <div>
    <BookList />
    <hr />
    <BookInput />
  </div>
);

export default Books;
