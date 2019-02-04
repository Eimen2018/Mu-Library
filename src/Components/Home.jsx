import React, { Component } from 'react';
import Navbar from './SignedInNavBar';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <header><Navbar /></header>
            </React.Fragment>

         );
    }
}
 
export default Home;