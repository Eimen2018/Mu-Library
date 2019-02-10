import React, { Component } from 'react';
import Logo from '../Assets/Images/MuIcon.png'
import Search from '../Assets/Images/icons8_Search.ico'
import {Link,NavLink} from 'react-router-dom';
import user from '../Assets/Images/me.jpg';
import notification from '../Assets/Images/icons8_Notification_64px.png';
import logout from '../Assets/Images/icons8_Export_64px_1.png';
import setting from '../Assets/Images/icons8_Settings_64px_1.png';

class SignedInNavBar extends Component {
    state = { 
        dropdown:false
     }
     HandleOnclick = (e) =>{
        if(this.state.dropdown === false){
            this.setState({dropdown : true});
        document.querySelector('.dropdown').style = 'visibility:visible';
        }else{
            this.setState({dropdown : false});
            document.querySelector('.dropdown').style = 'visibility:hidden';
        }
     }
    render() { 
        return (  
            <div className="navigation">
                <div className="logo">
                    <Link to ={{pathname:'/home'}}><img src={Logo} alt="Logo" height="50" width="50"/>
                        <h2>Library</h2></Link>
                </div>
            <nav>
                <ul className="signedinUl">
                    <li><NavLink to='/home' exact activeClassName='nav-active'>Home</NavLink></li>
                    <li><NavLink to='/Auth/Books' activeClassName='nav-active'>Books</NavLink></li>
                    <li><NavLink to='/Auth/Handouts' activeClassName='nav-active'>Handouts</NavLink></li>
                    <li><NavLink to='/tutorials' activeClassName='nav-active'>Tutorials</NavLink></li>
                    <li><NavLink to='/Quizes' activeClassName='nav-active'>Quizes</NavLink></li>
                    <li><NavLink to='/upload' activeClassName='nav-active'>Upload</NavLink></li>
                    <li>
                        <div className="search-box"><input type="text" className="search-txt" name="" placeholder="Type to search"/>
                            <Link to='/Search'className="search-btn"><img className="search-icon" src={Search} alt="" />
                            </Link></div></li>
                </ul>
                <button className="btn-signedin"><Link to="#" class="badge1" data-badge="2"><img className="userNoti" src={notification} alt="" width="30" height="30"/></Link><img className="userImage" src={user} alt="" width="30" height="30" onClick={this.HandleOnclick}/><span className="username">Aymen Nur</span></button>
                <div className="dropdown">
                <img src={setting} alt="" width="20" className="list"/>
                <span className="list">Setting</span>
                <img src={logout} alt="" width="20" className="list"/>
                <Link to="/"><span className="top list">log out</span></Link>
                </div>
            </nav>
        </div>
 );
    }
}
 
export default SignedInNavBar;