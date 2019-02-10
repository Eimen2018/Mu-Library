import React, { Component } from 'react';
import Navbar from './Navbar';
import SignedInNavbar from './SignedInNavBar';
import Book from './Book';
import bookinfo from '../Assets/Books'
import { bool } from 'prop-types';

class Books extends Component {
    state = { }

    
    render() { 
        const links = this.props.location.pathname==='/Auth/Books'?<SignedInNavbar/>:<Navbar/>;
        const auth = this.props.location.pathname==='/Auth/Books'?true:false;
        console.log(this.props)
        return ( 
            <React.Fragment>
        <div className="Books">
        <header>
         {links}
        </header>
        <main>
        <div className="container">
                <h4>Recently Uploaded</h4>
                <Book bookinfo ={bookinfo} auth = {auth} />
            </div>
        </main>
       </div>
       </React.Fragment>
            
         );
    }
}
 
export default Books;