import React, { Component } from 'react';

class Book extends Component {
    state = {  }
    render() { 
        const {title,Desc,Publisher} = this.props.bookinfo;
        return ( 
            
            <div className="Book">
            {this.props.bookinfo.map(book=>
            <div className="Book-Desc">
                <img className="Book-Image"src="" alt=""/>
                <div className="Book-Desc-w">
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
 
export default Book;