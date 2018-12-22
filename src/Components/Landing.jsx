import React, { Component } from 'react';
import Quote from '../Assets/undraw_book_lover_mkck.png'
import Student from '../Assets/undraw_reading_list_4boi.png'
import Teacher from '../Assets/undraw_teacher_35j2.png'
import premium from '../Assets/undraw_graduation_9x4i.png'

class Landing extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>
            <div className="image-qoute-container">
        <div className="image-quote">
        <div className="qoute"><img src={Quote} alt="reading Books"/></div>
        <div className="qoute-txt"><h1>Explore beyond your academic year</h1></div>
    </div>
        </div>
        <div className="student"> <img src={Student} alt="student reading"/> <h3>Students</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati saepe temporibus tenetur hic ipsa voluptatum pariatur odit laudantium. Ut pariatur odit magni quae quo tempora porro repellat delectus aliquam? Consequatur!</p></div>
        <div className="teacher"> <img src={Teacher} alt="teacher"/> <h3>Teachers</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos consequuntur libero necessitatibus beatae quod amet reiciendis illo delectus. Quam odio quidem rem ipsum temporibus, optio dolorem illo rerum explicabo suscipit.</p></div>
        <div className="premium"> <img src={premium} alt="Graduation"/> <h3>Premium</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem esse exercitationem facere reprehenderit nostrum laudantium facilis officiis vero fugit necessitatibus, sed error possimus, beatae rem neque id? Sequi, dicta.</p><button className="btn-signin signup">Sign Up</button></div>  
        </React.Fragment>  
         );
    }
}
 
export default Landing;