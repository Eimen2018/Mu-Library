import React,{Component} from 'react';
import Navbar from './Navbar';
import reactReveal from 'react-reveal';
import Handout from './Handout';
import bookinfo from '../Assets/Books'
import SignedInNavbar from './SignedInNavBar';

class Handouts extends Component {
    state = {  }
    render() { 
        const links = this.props.location.pathname==='/Auth/Handouts'?<SignedInNavbar/>:<Navbar/>;
        const auth = this.props.location.pathname==='/Auth/Handouts'?true:false;
        return ( 
            <React.Fragment>
           <header>
         {links}
        </header>
        <main>
        <div className="container">
                <h4>Recently Uploaded</h4>
                <Handout bookinfo ={bookinfo} auth = {auth} />
                {/* <BookCard bookinfo ={bookinfo}/> */}
            </div>
        </main>
            </React.Fragment>
         );
    }
}
 
export default Handouts;