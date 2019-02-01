import React, { Component } from 'react';
import Google from '../Assets/Images/icons8_Google_Plus_30px.png';
import Facebook from '../Assets/Images/icons8_Facebook_30px.png';
import Twitter from '../Assets/Images/icons8_Twitter_30px_1.png';
import Instagram from '../Assets/Images/icons8_Instagram_30px_2.png';
import Youtube from '../Assets/Images/icons8_Play_Button_30px.png';
 class Footer extends Component {
     state = {  }
     render() { 
         return ( <React.Fragment>
            <div className="middle">
            <h4>Follow Us On</h4>
            <a href="btn"><img src={Facebook} alt="Facebook"/></a>
            <a href="btn"><img src={Twitter} alt="Twitter"/></a>
            <a href="btn"><img src={Google} alt="Google Plus"/></a>
            <a href="btn"><img src={Instagram} alt="Instagram"/></a>
            <a href="btn"><img src={Youtube} alt="Youtube"/></a>
        </div>
		<i><small>Copyright &copy; 2018 Eimen. All Rights Reserved.</small></i>
        </React.Fragment>
          );
     }
 }
  
 export default Footer;