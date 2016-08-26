import React from 'react';
import './book.css';

const Book = (props) => {

  return (
    <div className="book">
      <img className="book-image" src={props.imageUrl} alt="Book cover" />
      <p className="book-info">{props.title} - {props.author}</p>
    </div>
  )
}

export default Book;
