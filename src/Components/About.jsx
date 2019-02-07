import React,{Component} from 'react';
import Navbar from './Navbar';
// import {Fade} from 'react-reveal';
import mypic from '../Assets/Images/AboutImage.png';
import FaceBookIcon from '../Assets/Images/facebook.png';
import GoogleIcon from '../Assets/Images/Google_Plus.png';
import InstagramIcon from '../Assets/Images/Instagram.png';
import Telegram from '../Assets/Images/icons8_Telegram_App_64px.png';
import Linkedin from '../Assets/Images/icons8_LinkedIn_64px.png';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
           <header>
         <Navbar/>
        </header>
        <main>
            <div className="contain">
                <div className="imagecont">
                    <img src={mypic} alt="Me"/>
                </div>
                <div className="AboutText">
                    <h1>Aymen Nurhussien</h1>
                    <p>Information System, Mekelle University</p>
                    <div className="contactIcons">
                        <img src={FaceBookIcon} alt="Facebook_Icon" className="Icon"/>
                        <img src={GoogleIcon} alt="Facebook_Icon" className="Icon"/>
                        <img src={InstagramIcon} alt="Facebook_Icon" className="Icon"/>
                        <img src={Telegram} alt="telegram_Icon" className="Icon"/>
                        <img src={Linkedin} alt="Linkedin_Icon" className="Icon"/>
                    </div>
                </div>
                {/* <div className="aboutme-container">
                <div className="aboutme">
                    <p className="title">About</p>
                    <p className="aboutDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iste dolor impedit distinctio, vitae laboriosam! Sequi nulla asperiores ducimus esse tempore, beatae, deserunt impedit perferendis molestias quas cupiditate dignissimos alias!</p>
                </div>                
                <div className="aboutme">
                    <p className="title">Educational Background</p>
                    <p className="aboutDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta, ut quasi, nesciunt necessitatibus minus optio quae libero velit illum expedita magnam nulla voluptas soluta! Rerum at corrupti tenetur eveniet.</p>
                </div>                
                <div className="aboutme">
                    <p className="title">Currently</p>
                    <p className="aboutDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus porro iste sit molestiae libero corrupti vel impedit, sint nemo eaque distinctio et vitae magni laboriosam saepe odit vero dolores!</p>
                </div>                
                </div> */}
            </div>
        </main>
            </React.Fragment>
         );
    }
}
 
export default About;