import React, { Component } from 'react';
import Navbar from './SignedInNavBar';
import Tutorial from './Tutorial';
import tutinfo from '../Assets/Tuts'

class tutorials extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <header><Navbar /></header>
            <main><Tutorial tutsinfo={tutinfo}/></main>
        </React.Fragment>
         );
    }
}
 
export default tutorials;