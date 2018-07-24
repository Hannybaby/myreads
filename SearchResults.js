import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class SearchResults extends Component{
  render(){
    	const {book}=this.props;
    	let bookImage=book.imageLinks?book.imageLinks.thumbnail:'https://cdn3.iconfinder.com/data/icons/security-2-1/512/restricted-128.png'
    	return (
    
    <div className="book">
        <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${bookImage})`}}></div>
                            <BookShelfChanger book={book} changeShelf={this.props.changeShelf}/>
                            </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
</div>
          )
}
}
                         
                                                                       
export default SearchResults