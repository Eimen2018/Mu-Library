import React, { Component } from 'react';
import Logo from '../Assets/Images/MuIcon.png'
import Search from '../Assets/Images/icons8_Search.ico'
import {Link,NavLink} from 'react-router-dom';

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
                    <li><NavLink to='/' exact activeClassName='nav-active'>Home</NavLink></li>
                    <li><NavLink to='/Books' activeClassName='nav-active'>Books</NavLink></li>
                    <li><NavLink to='/Handouts' activeClassName='nav-active'>Handouts</NavLink></li>
                    <li><NavLink to='/About' activeClassName='nav-active'>About</NavLink></li>
                    <li>
                        <div className="search-box"><input type="text" className="search-txt" name="" placeholder="Type to search"/>
                            <Link to='/Search'className="search-btn"><img className="search-icon" src={Search} alt="" />
                            </Link></div></li>
                    <li id="signin"><Link to={{pathname:`/SignIn`}}><button className="btn-signin">Sign In</button></Link></li>
                </ul>
            </nav>
        </div>
 );
    }
}
 
export default Navbar;