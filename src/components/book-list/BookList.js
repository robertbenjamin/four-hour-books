import React, { Component } from 'react';
import './bookList.css';

import bookData from '../../data/books.json';

import Book from './book/Book';

class BookList extends Component {
  render() {
    var books = bookData.map(function(book) {
      return (
        <Book
          title={book.title}
          author={book.author} 
          imageUrl={book.img}
        />
      );
    });

    return (
      <div className="book-list">
        {books}
      </div>
    )
  }
}

export default BookList;
