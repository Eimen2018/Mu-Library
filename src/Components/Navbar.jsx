import React, { Component } from 'react';
import Logo from '../Assets/MuIcon.png'
import Search from '../Assets/icons8_Search.ico'
import Books from './Books';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navigation">
                <div className="logo">
                    <Link to ={{pathname:'/'}}><img src={Logo} alt="Logo" height="50" width="50"/>
                        <h2>Library</h2></Link>
                </div>
            <nav>
                <ul>
                    <li><Link to={{pathname:`/`}}>Home</Link></li>
                    <li><Link to={{pathname:`/Books`}}>Books</Link></li>
                    <li><a>Handouts</a></li>
                    <li><a>About</a></li>
                    <li>
                        <div className="search-box"><input type="text" className="search-txt" name="" placeholder="Type to search"/>
                            <a href="" className="search-btn"><img className="search-icon" src={Search} alt="" />
                            </a></div></li>
                    <li id="signin"><a href=""><button className="btn-signin">Sign In</button></a></li>
                    
                </ul>
            </nav>
        </div>
 );
    }
}
 
export default Navbar;