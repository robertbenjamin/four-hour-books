import React, { Component } from 'react';
import './book.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    var active = this.state.active ? 'active' : '';

    return (
      <div className={active + ' book'} onClick={this.handleClick}>
        <img className="book-image" src={this.props.imageUrl} alt="Book cover" />
        <div className="book-info">
          {this.props.title}
          <br />
          —
          <br />
          {this.props.author}
        </div>
      </div>
    )
  }
}

export default Book;
