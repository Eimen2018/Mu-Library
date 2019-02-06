import React, { Component } from 'react';
import {Player,BigPlayButton} from 'video-react';
import Navbar from './SignedInNavBar';
import video from '../Assets/Videos/b.MP4';
import poster from '../Assets/Images/tut.jpg';
import '../Assets/Style/video-react.css';
import play from '../Assets/Images/icons8_Play_96px.png';

class TutorialDetail extends Component {
    state = {  
        tutsinfo:this.props.location.state.tutsinfo,
        src:''
    }
    
    render() { 
        const suggestion =[];
        for(var i = 0 ;i < 6;i++){
            suggestion.push(<div className="suggestion">
            <img className="postersug" src={poster} alt="" width="250" height="150"/>
            <div className="playcontainer"><img className="playsug" src={play} alt="" /></div>
            <h4>{this.state.tutsinfo.title + " "+(i+1)}</h4>
            <div className="div playerdes">
            <h6>uploaded by: Eimen</h6>
            <h6>2K likes</h6>
            <h6>4k views</h6>
            </div>
            </div>)
        }
        return ( 
            <React.Fragment>
            <header>
             <Navbar/>
            </header>
            <main>
                <div className="player">
            <Player
            playsInline
            poster={poster}
            src={video} 
            fluid={false}
            width={600}
            height={350}
            
            ><BigPlayButton position="center" />
            </Player>
            <h3>{this.state.tutsinfo.title}</h3> 
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iure quis magni numquam, inventore ipsum architecto eius sapiente sunt suscipit, praesentium veritatis, atque quo dolores officia odio possimus cum ad!</h6>
            <button className="btn-showmore">Show More</button>
            </div>
            {suggestion}
            </main>
            </React.Fragment>
         );
    }
}
 
export default TutorialDetail;