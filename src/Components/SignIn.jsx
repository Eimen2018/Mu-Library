import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Assets/Images/MuIcon.png';
import { Fade } from 'react-reveal';

class SignIn extends Component {
    state = { 
        auth:''
     }

    HandleOnSubmit = ({auth})=>{
        this.setState(auth=true);
    };
    render() { 
        return ( 
            <React.Fragment>
        <main>
            <Fade left>
            <div className="sign-in-container">
            <Link to={{pathname:'/'}}><button className="btn-Back"></button></Link>
            <div className="logo">
                    <Link to ={{pathname:'/'}} ><img src={Logo} alt="Logo" height="100" width="100"/>
                        <h2>Library</h2></Link>
                        {/* <h4>Sign In</h4> */}
                </div>
                <div className="signin-form">
                <form action="">
                <label>Email / MU ID</label>
                <input type="text" name="email" required placeholder="john@example.com"/>
                <label>Password</label>
                <input type="password" name="password" required/>
                <Link to={{pathname:'/home'}}><button type="submit" className="btn-Next">Next</button></Link>
                <Link to={{pathname:'/create'}}><button onSubmit={this.HandleOnSubmit} className="btn-create">Create Account</button></Link>
                </form>
                </div>
            </div>
            </Fade>
        </main>
            </React.Fragment>
         );
    }
}
 
export default SignIn;