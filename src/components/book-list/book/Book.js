import React from 'react';
import './book.css';

const Book = (props) => {

  return (
    <div className="book">
      <img className="book-image" src={props.imageUrl} alt="Book cover" />
      <div className="book-info">
        {props.title}
        <br />
        —
        <br />
        {props.author}
      </div>
    </div>
  )
}

export default Book;
