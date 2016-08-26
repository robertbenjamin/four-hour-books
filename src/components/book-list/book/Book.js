import React from 'react';

const Book = (props) => {

  return (
    <div className="book">
      <p>{props.title}</p>
      <p>{props.author}</p>
      <p>{props.imageUrl}</p>
    </div>
  )
}

export default Book;
