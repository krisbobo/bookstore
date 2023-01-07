import React from 'react';
import { useSelector } from 'react-redux';
import DisplayBooks from './displaybooks';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <div className="container">
        {books.map((book) => <DisplayBooks key={book.id} book={book} />)}
      </div>
      <div id="line" />
    </>
  );
};

export default BookList;
