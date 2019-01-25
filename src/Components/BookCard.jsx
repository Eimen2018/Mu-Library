import React, { Component } from 'react';
import { Fade } from 'react-reveal';


class BookCard extends Component {
    state = {  }
    render() { 
        const {title,Desc,Publisher} = this.props.bookinfo;
        return (  
            
            <div className="Book">
            {this.props.bookinfo.map(book=>
            <Fade>
            <div key={book.ID} className="Book-Card">
                <img className="Book-Card-Image"src="" alt=""/>
                <div className="Book-Card-Desc-w">
                    <h3>{book.title}</h3>
                    <p>{book.Desc}</p>
                    <i>By:{book.Publisher}</i>
                </div>
                </div>
                </Fade>
                )}
            </div>
            
         );
    }
}
 
export default BookCard;