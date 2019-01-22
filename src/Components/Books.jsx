import React, { Component } from 'react';
import Navbar from './Navbar';
import Book from './Book';
import BookCard from './BookCard'
import bookinfo from '../Assets/Books'

class Books extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        <div className="Books">
        <header>
         <Navbar/>
        </header>
        <main>
        <div className="container">
                <h4>Recently Uploaded</h4>
                <Book bookinfo ={bookinfo}/>
                {/* <BookCard bookinfo ={bookinfo}/> */}
            </div>
        </main>
       </div>
       </React.Fragment>
            
         );
    }
}
 
export default Books;