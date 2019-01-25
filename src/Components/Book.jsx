import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';

class Book extends Component {
    state = {  }
    render() { 
        const {ID,title,Desc,Publisher} = this.props.bookinfo;
        return ( 
            
            <div className="Book">
            {this.props.bookinfo.map(book=>
            <Link to={{
                pathname:`/Book/${book.ID}`,
                state:{bookinfo:book}
                }}>
            <Fade right><div key={book.ID} className="Book-Desc">
                <img className="Book-Image"src="" alt=""/>
                <Fade right><div className="Book-Desc-w">
                    <h3>{book.title}</h3>
                    <p>{book.Desc}</p>
                    <i>By:{book.Publisher}</i>
                </div></Fade>
                </div></Fade></Link>
                )}
            </div>
            
         );
    }
}
 
export default Book;