import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class SearchResults extends Component{
  render(){
    	const {book}=this.props;
    	return (
    
    <div className="book">
        <div className="book-top">
             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 	'url(${bookImage])' }}></div>
                            <BookShelfChanger book={book} changeShelf={this.props.changeShelf}/>
                            </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
</div>
          )
}
}
                         
                                                                       
export default SearchResults