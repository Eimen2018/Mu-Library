import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import {Link} from 'react-router-dom';
import thumb from '../Assets/Images/thumbnails/thumb3.jpg';


class Handout extends Component {
    state = {  }
    render() { 
        const links = this.props.auth===true?`/Auth`:``;
        
        return (  
            
            <div className="Handout">
            {this.props.bookinfo.map(book=>
            <Link to={{
                pathname:`/Handout`+links+`/${book.ID}`,
                state:{bookinfo:book}
                }}>
            <Fade right>
            <div key={book.ID} className="Handout-Card">
                <img className="Handout-Card-Image"src={thumb} alt=""/>
                <Fade right><div className="Handout-Card-Desc-w">
                    <h3>{book.title}</h3>
                    <p>{book.Desc}</p>
                    <i>By:{book.Publisher}</i>
                </div></Fade>
                </div>
                </Fade></Link>
                )}
            </div>
            
         );
    }
}
 
export default Handout;