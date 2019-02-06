import React, { Component } from 'react';
import AI from '../Assets/Images/AI.png';
import html from '../Assets/Images/IP_1.png';
import pr from '../Assets/Images/IP.png';
import c from '../Assets/Images/ISS.jpg';
import play from '../Assets/Images/icons8_Play_96px.png';
import { Link } from 'react-router-dom';

class Tutorial extends Component {
    state = {  }
    render() { 
        const pics ={AI,html,pr,c}
        return ( 
            <div className="tut">
            {this.props.tutsinfo.map(tut=><Link to={{pathname:`/tutorial/${tut.title}`,state:{tutsinfo:tut}}}>
            <div className="tutcontent" key={tut.title}>
            <img className="poster" src={AI} alt="" width="250" height="250"/>
            <div className="playcontainer"><img className="play" src={play} alt="" /></div>
            <h4>{tut.title }</h4>
            </div></Link>
            )}
            </div>
         );
    }
}
 
export default Tutorial;