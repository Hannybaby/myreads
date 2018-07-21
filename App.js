import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf' 
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css'

// import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books:[]
  }

componentDidMount() {
  BooksAPI.getAll().then((books) => {
  this.setState({books:books})
  console.log("state", this.state.books);
})
}

getBooksByTitle(shelfName){
  return this.state.books.filter((book) =>
  book.shelf===shelfName
  )
};

onChangeShelf = (book, newShelf) => {
  BooksAPI.update(book,newShelf).then(() => {
    book.shelf=newShelf;
    
    this.setState(state => ({
      books:this.state.books.filter(b => b.id !== book.id).concat([book])
                  })
    )
  })
}

render() {
  return (
  <div className='app'>
   <Header/> 
   <div className='list-book-content'>
   
   <Bookshelf
   title='Currently Reading'
   books={this.getBooksByTitle('currentlyReading')}
   changeShelf={this.onChangeShelf}
   />

   <Bookshelf
   title='Want to Read'
   books={this.getBooksByTitle('wantToRead')}
   changeShelf={this.onChangeShelf}
   />

   <Bookshelf
   title='Read'
   books={this.getBooksByTitle('read')}
   changeShelf={this.onChangeShelf}
   />
   </div>

<div className="open-search"> 
<Link to="/search"> Add Book </Link>
</div>
</div>
)}}

<div>
<Route path='/search' render={({history})=>(
  <SearchBooks
  	books={this.state.books}
  	changeShelf={this.onChangeShelf}
  />
 
  )}
  />
 </div>


 
  



export default App