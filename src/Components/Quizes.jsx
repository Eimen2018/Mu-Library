import React, { Component } from 'react';
import Navbar from './SignedInNavBar';
import Quiz from './quiz';

class Quizes extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Quiz />
                </main>
            </React.Fragment>
         );
    }
}
 
export default Quizes;