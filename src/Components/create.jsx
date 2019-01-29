import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Assets/MuIcon.png';
import { Fade } from 'react-reveal';

class create extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <main>
                <Fade right>
                <div className="sign-in-container">
                <Link to={{pathname:'/SignIn'}}><button className="btn-Back"></button></Link>
                <div className="logo">
                        <Link to ={{pathname:'/'}} ><img src={Logo} alt="Logo" height="100" width="100"/>
                            <h2>Library</h2></Link>
                    </div>
                    <div className="signup-form">
                    <form action="">
                    <label>First Name</label>
                    <input type="text" name="fname" required placeholder="john"/>
                    <label>Last Name</label>
                    <input type="text" name="lname" required placeholder="lenon"/>
                    <label>Email / MU ID</label>
                    <input type="text" name="email" required placeholder="john@example.com"/>
                    <label>Password</label>
                    <input type="password" name="password" required/>
                    <Link to={{}}><button className="btn-create">Create</button></Link>
                    </form>
                    </div>
                </div>
                </Fade>
            </main>
                </React.Fragment>
         );
    }
}
 
export default create;