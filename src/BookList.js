import React from 'react'
import {Link} from 'react-router-dom'

class Books extends React.Component {
  
  state = {filter: ''}

  handleFilterChange(evt){
    this.setState({filter: evt.target.value})
  }

  render() {
    const {books} = this.props 
    const filteredBooks = books.filter((b) => {
      return b.title.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    })
    return (
      <div className="Books">
        <input onChange={this.handleFilterChange.bind(this)} className="input is-large" type="text" placeholder="Filter The List" />
        <ul className="menu-list">
          {books.map((b) => {
            return (
              <Link key={b._id} to={`/books/${b._id}`}>{b.title}</Link>
              
              // <li><a href="#">{b.title}</a></li>
            )
          })}
          
        </ul>
      </div>
    )
  }
}

export default Books