import React, { Component } from 'react';
import poster from '../Assets/Images/question.jpg'
import { Link } from 'react-router-dom';


class quiz extends Component {
    state = {  }
    render() { 
        const title = ["Quiz on css","Quiz on html","Quiz on AI","Quiz on IP Addressing","Quiz on maintenance","Quiz on css","Quiz on html","Quiz on AI","Quiz on IP Addressing","Quiz on maintenance"]
        const quizes =[];
        for(var i = 0 ;i < 10;i++){
            quizes.push(<div className="quiz">
            <img className="posterquiz" src={poster} alt="" width="250" height="150"/>
            <div className="quizstartcontainer"><Link to="/Quize/Detail"><span className="quizstart" >Start Quiz</span></Link></div>
            <h4>{title[i]}</h4>
            </div>)
        }
        return ( 
            <div className="quiz-container">
            {quizes}
            </div>
         );
    }
}
 
export default quiz;