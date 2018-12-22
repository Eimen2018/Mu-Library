import React, { Component } from 'react';
import Logo from '../Assets/MuIcon.png'
import Search from '../Assets/icons8_Search.ico'
class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navigation">
                <div className="logo">
                    <a href="index.html"><img src={Logo} alt="Logo" height="50" width="50"/></a>
                        <a><h2>Library</h2></a>
                </div>
            <nav>
                <ul>
                    <li><a href="index.html" className="nav-active">Home</a></li>
                    <li><a>Books</a></li>
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