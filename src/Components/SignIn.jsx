import React,{Component} from 'react';
import Navbar from './Navbar';
import reactReveal from 'react-reveal';
import {Link} from 'react-router-dom';
import Logo from '../Assets/MuIcon.png'

class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
           <header>
         <Navbar/>
        </header>
        <main>
            <div className="sign-in-container">
            <div className="logo">
                    <Link to ={{pathname:'/'}}><img src={Logo} alt="Logo" height="50" width="50"/>
                        <h2>Library</h2></Link>
                </div>
            </div>
        </main>
            </React.Fragment>
         );
    }
}
 
export default SignIn;