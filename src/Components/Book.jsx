import React, { Component } from 'react';

class Book extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Book">
                <img src="" alt=""/>
                <div className="Book-Desc">
                    <h6>Title of the book</h6>
                    <p>Description</p>
                    <i>By:Publisher</i>
                </div>
            </div>
         );
    }
}
 
export default Book;