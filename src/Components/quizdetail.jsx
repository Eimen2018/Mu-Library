import React, { Component } from 'react';
import Navbar from './SignedInNavBar';
import quizs from '../Assets/quiz';
import {Fade} from 'react-reveal';


class quizdetail extends Component {
    
    state = { 
        question:this.props
     }
      usr_answer =[];
      
      Process_result = () =>{
          const machine_answer = ['D','C','B','A','A']
          var wrong_answer = [];
         for(var j = 0;j<machine_answer.length;j++){
              if(machine_answer[j]!==this.usr_answer[j]){
              wrong_answer.push({
                    key:j,
                    value:machine_answer[j]
              })
            }
          }
          console.log(wrong_answer);
          const radio = ['A','B','C','D'];
          var element = document.getElementsByTagName("label"), index;

            for (index = element.length - 1; index >= 0; index--) {
                element[index].parentNode.removeChild(element[index]);
            }
        
          for( var i =0;i<4;i++){
            document.getElementById(radio[i]).parentNode.removeChild(document.getElementById(radio[i]))
        }
        document.getElementById("que").innerHTML ="Your Result.."
        var react ="";
        if(wrong_answer.length<2)react = "Excellent"
        else if (wrong_answer.length<3)react = "Good"
        else react = "Poor"
        var para = document.createElement("h2");
        var node = document.createTextNode("\nResult "+(5-wrong_answer.length)+"/5");
        para.appendChild(node);

        var ele = document.getElementById("questions");
        ele.appendChild(para);

         para = document.createElement("h2");
         node = document.createTextNode(react);
        para.appendChild(node);

         ele = document.getElementById("questions2");
        ele.appendChild(para);
        document.getElementById("btn-Next").innerHTML = "Finish"
        document.getElementById("btn-Next").addEventListener("click",()=>{
            window.location.href = '/Quizes';
        })
        document.getElementById("que").innerHTML = "Your Result ..."
          
      }
     HandleClick = (e) =>{
         if(this.state.question === 5){
             this.Process_result()
         }else{
         var check = false
         const radio = ['A','B','C','D'];
         
         for(var i =0;i<4;i++){
             if(document.getElementById(radio[i]).checked){
             check = true;
             this.usr_answer.push(radio[i])
            }
         }
         console.log(this.usr_answer);
         if(check){
         this.setState({
             question:this.state.question +1
         })
        }
         for( i =0;i<4;i++){
             document.getElementById(radio[i]).checked = false
         }
        }
     }
    render() { 
        return ( 
            <React.Fragment>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <div className="questions" >
                    <Fade right><div className="question-cont">
                    <h4 id="que">{this.state.question<5?quizs[this.state.question].Ques:"Please Wait..."}</h4>
                    <div className="choices" id="questions"><input type="radio" name="ch" id="A"className="btn-choice" /><label htmlFor="A">{this.state.question<5?quizs[this.state.question].A:"Your"}</label></div>
                    <div className="choices" id="questions2"><input type="radio" name="ch"  id="B" className="btn-choice" /><label htmlFor="B">{this.state.question<5?quizs[this.state.question].B:"Result is"}</label></div>
                    <div className="choices"><input type="radio" name="ch"  id="C" className="btn-choice" /><label htmlFor="C">{this.state.question<5?quizs[this.state.question].C:"getting"}</label></div>
                    <div className="choices"><input type="radio" name="ch"  id="D" className="btn-choice" /><label htmlFor="D">{this.state.question<5?quizs[this.state.question].D:"Processed"}</label></div>
                    </div></Fade>
                    {this.state.question<5?<button className="btn-Next" onClick={this.HandleClick} >Next</button>:<button className="btn-Next" id="btn-Next" onClick={this.HandleClick}>See Result</button>}
                    </div>
                </main>
            </React.Fragment>
         );
    }
}
 
export default quizdetail;