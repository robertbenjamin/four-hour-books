import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import BookList from './components/book-list/BookList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BookList />
      </div>
    );
  }
}

export default App;
