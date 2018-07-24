import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchResults from './SearchResults'
import { Debounce } from 'react-throttle'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
	

	state = {
      query:'',
      searchBooks:[]
    }

updateQuery = (query)=>{
  this.setState ({query:query})
  if(query) {
    BooksAPI.search(query.trim(),5).then((books)=>{
      
      if(books.length){
        books.forEach((book,index)=>{
          let matchBook=this.props.books.find((b)=>b.id===book.id);
          book.shelf=matchBook?matchBook.shelf: 'none';
          books[index]=book;
                });
    
     this.setState({
       searchBooks:books
     })
    }
    else {
      this.setState ({searchBooks:[]});
    }
    });
  	}
  else {
    this.setState({searchBooks:[]})
  }
}

componentWillUnount(){
  this.updateQuery('')
}

render() {
  return (
  <div className="search-books">
   <div className="search-books-bar">
   	<Link className="close-search" to='/'>Close</Link>
   	<div className="search-books-input-wrapper">
   		<Debounce time="400" handler="onChange">
   		<input type="text" placeholder="Search by title or author"
   		onChange={(event) => this.updateQuery(event.target.value)}
		/>
		</Debounce>
	</div>
</div>

<div className='search-books-results'>
	<ol className='books-grid'>
	{this.state.searchBooks.map((book)=>(
     <li key={book.id} className='contact-list-item'>
		<SearchResults book={book} changeShelf={this.props.changeShelf} />
	</li>
		))}
	</ol>
</div>
</div>
)}}

export default SearchBooks;