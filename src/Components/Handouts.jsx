import React,{Component} from 'react';
import Navbar from './Navbar';
import reactReveal from 'react-reveal';
import Handout from './Handout';
import bookinfo from '../Assets/Books'

class Handouts extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
           <header>
         <Navbar/>
        </header>
        <main>
        <div className="container">
                <h4>Recently Uploaded</h4>
                <Handout bookinfo ={bookinfo}/>
                {/* <BookCard bookinfo ={bookinfo}/> */}
            </div>
        </main>
            </React.Fragment>
         );
    }
}
 
export default Handouts;