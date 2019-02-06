import React, { Component } from 'react';
import Ai from '../Assets/Images/AI.png'
import ip from '../Assets/Images/IP_1.png'
import cn from '../Assets/Images/computer-network-png-1.png'
import wc from '../Assets/Images/wc_2.jpg';
import cm from '../Assets/Images/maintenance.jpg';
import is from '../Assets/Images/ISS.jpg';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dash-container">
            <div className="welcome">
            <h3>Welcome Aymen Nur</h3>
            </div>
            <div className="dept">
            <h4>Information System</h4>
            {/* <p>Academic Year: 3</p>
            <p>Semester: 1</p> */}
            </div>
            <h5 className="courses">Courses for this semester</h5>
            <div className="subject">
            <img src={Ai} alt="" width="150" height="150"/>
            <div className="subject-desc">
            <h5>Artificial Intelligence</h5>
            <h6>Course ID: INSY3074</h6>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            </div>
            <div className="subject">
            <img src={ip} alt="" width="150" height="150"/>
            <div className="subject-desc">
            <h5>Internet Programming</h5>
            <h6>Course ID: INSY3074</h6>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            </div>
            <div className="subject">
            <img src={wc} alt="" width="150" height="150"/>
            <div className="subject-desc">
            <h5>Wireless Communication</h5>
            <h6>Course ID: INSY3074</h6>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            </div>
            <div className="subject">
            <img src={cn} alt="" width="150" height="150"/>
            <div className="subject-desc">
            <h5>Computer Networks</h5>
            <h6>Course ID: INSY3074</h6>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            </div>
            <div className="subject">
            <img src={cm} alt="" width="150" height="150"/>
            <div className="subject-desc">
            <h5>Computer Maintenance</h5>
            <h6>Course ID: INSY3074</h6>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            </div>
            <div className="subject">
            <img src={is} alt="" width="150" height="150"/>
            <div className="subject-desc">
            <h5>Information Security</h5>
            <h6>Course ID: INSY3074</h6>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            </div>
            {/* <div className="subject">
            <img src={ip} alt="" width="250" height="250"/>
            <h5>Internet Programming</h5>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            <div className="subject">
            <img src={cn} alt="" width="250" height="250"/>
            <h5>Computer Networks</h5>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            <div className="subject">
            <img src={wc} alt="" width="250" height="250"/>
            <h5>Wireless Communicat...</h5>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            <div className="subject">
            <img src={Ai} alt="" width="250" height="250"/>
            <h5>Computer Maintenance</h5>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div>
            <div className="subject">
            <img src={Ai} alt="" width="250" height="250"/>
            <h5>Artificial Intelligence</h5>
            <div className="btnchoices">
            <button className="btnchoice">Course Outline</button>
            <button className="btnchoice">Books</button>
            <button className="btnchoice">Handouts</button>
            <button className="btnchoice">Questions</button>
            </div>
            </div> */}
            
            </div>
         );
    }
}
 
export default Dashboard;