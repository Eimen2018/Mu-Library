import React, { Component } from 'react';
import Navbar from './SignedInNavBar';
import Dashboard from './Dashboard';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <header><Navbar /></header>
                <main><Dashboard /></main>
            </React.Fragment>

         );
    }
}
 
export default Home;