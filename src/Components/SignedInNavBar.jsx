import React, { Component } from 'react';
import Logo from '../Assets/Images/MuIcon.png'
import Search from '../Assets/Images/icons8_Search.ico'
import {Link,NavLink} from 'react-router-dom';
import user from '../Assets/Images/icons8_Male_User_50px_1.png';
import notification from '../Assets/Images/icons8_Notification_64px.png';

class SignedInNavBar extends Component {
    state = { 
        auth:''
     }
    render() { 
        return (  
            <div className="navigation">
                <div className="logo">
                    <Link to ={{pathname:'/'}}><img src={Logo} alt="Logo" height="50" width="50"/>
                        <h2>Library</h2></Link>
                </div>
            <nav>
                <ul className="signedinUl">
                    <li><NavLink to='/home' exact activeClassName='nav-active'>Home</NavLink></li>
                    <li><NavLink to='/Book' activeClassName='nav-active'>Books</NavLink></li>
                    <li><NavLink to='/Handout' activeClassName='nav-active'>Handouts</NavLink></li>
                    <li><NavLink to='/Book' activeClassName='nav-active'>Tutorials</NavLink></li>
                    <li><NavLink to='/Handout' activeClassName='nav-active'>Quizes</NavLink></li>
                    <li><NavLink to='/About' activeClassName='nav-active'>Upload</NavLink></li>
                    <li>
                        <div className="search-box"><input type="text" className="search-txt" name="" placeholder="Type to search"/>
                            <Link to='/Search'className="search-btn"><img className="search-icon" src={Search} alt="" />
                            </Link></div></li>
                </ul>
                <button className="btn-signedin"><Link to="/" class="badge1" data-badge="27"><img className="userNoti" src={notification} alt="" width="30" height="30"/></Link><img className="userImage" src={user} alt="" width="30" height="30"/><span className="username">Aymen Nur</span></button>
            </nav>
        </div>
 );
    }
}
 
export default SignedInNavBar;