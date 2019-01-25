import React, { Component } from 'react';
import Navbar from './Navbar';
import Book from './Book';
import { Fade } from 'react-reveal';

class BookDetail extends Component {
    state = { 
        bookinfo:this.props.location.state.bookinfo
     }
    render() { 
        console.log(this.props);
        
        return (
        <React.Fragment>
            <div className="Books-Detail">
            <header>
             <Navbar/>
            </header>
            <main>
            <div className="container">
            <Fade right><div key={this.state.bookinfo.ID} className="Book-Desc">
                <img className="Book-Image"src="" alt=""/>
                <Fade right><div className="Book-Desc-w">
                    <h3>{this.state.bookinfo.title}</h3>
                    <p>{this.state.bookinfo.Desc}</p>
                    <i>By:{this.state.bookinfo.Publisher}</i>
                </div></Fade>
                </div></Fade>
                </div>
            </main>
           </div>
           </React.Fragment>
            
         );
    }
}
 
export default BookDetail;