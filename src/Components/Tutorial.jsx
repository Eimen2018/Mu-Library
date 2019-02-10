import React, { Component } from 'react';
import play from '../Assets/Images/icons8_Play_96px.png';
import { Link } from 'react-router-dom';
import video from '../Assets/Images/video.png';

class Tutorial extends Component {
    state = {  }
    render() { 
        var i = 0;
        return ( 
            <div className="tut">
            {this.props.tutsinfo.map(tut=><Link to={{pathname:`/tutorial/${tut.title}`,state:{tutsinfo:tut}}}>
            <div className="tutcontent" key={tut.title}>
            <img className="poster" src={video} alt="" width="250" height="200"/>
            <div className="playcontainer"><img className="play" src={play} alt="" /></div>
            <h4>{tut.title }</h4>
            </div></Link>
            )}
            </div>
         );
    }
}
 
export default Tutorial;