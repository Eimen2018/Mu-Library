import React,{Component} from 'react';
import Navbar from './Navbar';
import {Fade} from 'react-reveal';
import mypic from '../Assets/Images/mypic.jpg';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
           <header>
         <Navbar/>
        </header>
        <main>
            <Fade bottom><div className="contain"><div className="imagecont"><img src={mypic} alt="Me" width="600" height="300"/></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod assumenda. Similique doloremque, delectus rerum incidunt harum reiciendis sequi dignissimos provident aliquam consectetur doloribus eos error animi quidem? Quas, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque distinctio sit quo quidem et maiores ducimus, architecto explicabo eius fuga error recusandae modi ad impedit ab illo! Aspernatur, esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi reiciendis velit eligendi explicabo aspernatur soluta porro molestiae. Ea quae at necessitatibus nam, qui nobis beatae repellat incidunt culpa nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod assumenda. Similique doloremque, delectus rerum incidunt harum reiciendis sequi dignissimos provident aliquam consectetur doloribus eos error animi quidem? Quas, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque distinctio sit quo quidem et maiores ducimus, architecto explicabo eius fuga error recusandae modi ad impedit ab illo! Aspernatur, esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi reiciendis velit eligendi explicabo aspernatur soluta porro molestiae. Ea quae at necessitatibus nam, qui nobis beatae repellat incidunt culpa nostrum. </h5>
            </div></Fade>
        </main>
            </React.Fragment>
         );
    }
}
 
export default About;