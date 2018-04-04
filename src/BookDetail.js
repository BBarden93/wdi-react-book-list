import React from 'react'
import bookList from './books.json'
import {Link} from 'react-router-dom'

class BookDetail extends React.Component {
  render() {
    const {book} = this.props 
    return (
      <div className="Book content">
        <div className="columns">
          <div className="column">
              <img src={book.imageLink} alt={book.title} />
          </div>
          <div className="column">
            <h1 className="title is-2">{book.title}</h1>
            <h2 className="title is-3">{book.author}</h2>
            <ul>
              <li>Year: {book.year}</li>
              <li>Pages: {book.pages}</li>
              <li>Language: {book.language}</li>
              <li>Country: {book.country}</li>
              <Link key={book._id} to={book.link}>{book.title}</Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BookDetail