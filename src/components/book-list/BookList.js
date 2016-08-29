import React from 'react';
import './bookList.css';

import bookData from '../../data/books.json';

import Book from './book/Book';

const BookList = () => {
  var books = bookData.map((book) => {
    return <Book
      key={`${book.title}.${book.author}`}
      imageUrl={book.img}
      title={book.title}
      author={book.author} 
    />
  });

  return (
    <div className="book-list">
      {books}
    </div>
  )
}

export default BookList;
