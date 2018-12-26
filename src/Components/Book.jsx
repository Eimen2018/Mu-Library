import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Book extends Component {
    state = {  }
    render() { 
        const {title,Desc,Publisher} = this.props.bookinfo;
        return ( 
            
            <Link to=""><div className="Book">
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
            </Link>
         );
    }
}
 
export default Book;