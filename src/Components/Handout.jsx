import React, { Component } from 'react';
import { Fade } from 'react-reveal';


class Handout extends Component {
    state = {  }
    render() { 
        const {title,Desc,Publisher} = this.props.bookinfo;
        return (  
            
            <div className="Handout">
            {this.props.bookinfo.map(book=>
            <Fade right>
            <div key={book.ID} className="Handout-Card">
                <img className="Handout-Card-Image"src="" alt=""/>
                <Fade right><div className="Handout-Card-Desc-w">
                    <h3>{book.title}</h3>
                    <p>{book.Desc}</p>
                    <i>By:{book.Publisher}</i>
                </div></Fade>
                </div>
                </Fade>
                )}
            </div>
            
         );
    }
}
 
export default Handout;