import React, { Component } from 'react';
import Navbar from './Navbar';
import Book from './Book';
import bookinfo from '../Assets/Books'

class Books extends Component {
    // bookinfo =[{
    //     title:'IP',
    //     Desc:'Introduction to Internet Programming',
    //     Publisher:'Mahfuz A.'
    
    // },{
    //     title:'AI',
    //     Desc:'Introduction to Artificial Intellignece',
    //     Publisher:'Haile A.'
    // }]
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
            </div>
        </main>
       </div>
       </React.Fragment>
            
         );
    }
}
 
export default Books;