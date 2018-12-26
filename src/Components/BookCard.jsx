import React, { Component } from 'react';

class BookCard extends Component {
    state = {  }
    render() { 
        const {title,Desc,Publisher} = this.props.bookinfo;
        return (  
            <div className="Book">
            {this.props.bookinfo.map(book=>
            <div className="Book-Card">
                <img className="Book-Card-Image"src="" alt=""/>
                <div className="Book-Card-Desc-w">
                    <h3>{book.title}</h3>
                    <p>{book.Desc}</p>
                    <i>By:{book.Publisher}</i>
                </div>
                </div>
                )}
            </div>
         );
    }
}
 
export default BookCard;