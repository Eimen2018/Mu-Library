import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import Books from './Books';
import BookDetail from './BookDetail';
import Handouts from './Handouts';
import About from './About';
import SignIn from './SignIn';
import create from './create';
import Home from './Home';
import tutorials from './tutorials';
import tutorialsDetail from './TutorialDetail';
import Quizes from './Quizes';
import upload from './upload';
import HandoutDetail from './HandoutDetail';
import QuizeDetail from './quizdetail';


const Router=() =>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/Books" component={Books}/>
        <Route path="/Book/:id" component={BookDetail}/>
        <Route path="/Handouts" component ={Handouts}/>
        <Route path="/Handout/:id" component ={HandoutDetail}/>
        <Route path="/About" component ={About}/>
        <Route path="/SignIn" component ={SignIn}/>
        <Route path="/create" component ={create}/>
        <Route path="/home" component={Home}/>
        <Route path="/tutorials" component={tutorials}/>
        <Route path="/tutorial/:id" component={tutorialsDetail}/>
        <Route path="/Quizes" component={Quizes}/>
        <Route path="/Quize/Detail" component={QuizeDetail}/>
        <Route path="/upload" component={upload}/>
        <Route path="/Auth/Books" component={Books}/>
        <Route path="/Auth/Book/:id" component={BookDetail}/>
        <Route path="/Auth/Handouts" component={Handouts}/>
        <Route path="/Auth/Handout/:id" component={HandoutDetail}/>


    </Switch>
    </BrowserRouter>
); 
export default Router;