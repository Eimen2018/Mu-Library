import React, { Component } from 'react';
import Navbar from './SignedInNavBar';
import quizs from '../Assets/quiz';
import {Fade} from 'react-reveal';


class quizdetail extends Component {
    state = { 
        question:0
     }
     HandleClick = (e) =>{
         
         this.setState({
             question:this.state.question +1
         })
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <div className="questions">
                    <Fade right><div className="question-cont">
                    <h4>{this.state.question<5?quizs[this.state.question].Ques:"Please Wait..."}</h4>
                    <div className="choices"><input type="radio" name="ch" id="A"className="btn-choice" /><label htmlFor="A">{this.state.question<5?quizs[this.state.question].A:"Your"}</label></div>
                    <div className="choices"><input type="radio" name="ch"  id="B" className="btn-choice" /><label htmlFor="B">{this.state.question<5?quizs[this.state.question].B:"Result is"}</label></div>
                    <div className="choices"><input type="radio" name="ch"  id="C" className="btn-choice" /><label htmlFor="C">{this.state.question<5?quizs[this.state.question].C:"getting"}</label></div>
                    <div className="choices"><input type="radio" name="ch"  id="D" className="btn-choice" /><label htmlFor="D">{this.state.question<5?quizs[this.state.question].D:"Processed"}</label></div>
                    </div></Fade>
                    {this.state.question<5?<button className="btn-Next" onClick={this.HandleClick}>Next</button>:""}
                    </div>
                </main>
            </React.Fragment>
         );
    }
}
 
export default quizdetail;