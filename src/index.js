import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/Header';
import BookList from './components/book-list/BookList';

ReactDOM.render(
  <div className="app">
    <Header />
    <BookList />
  </div>,
  document.querySelector('.root')
);
