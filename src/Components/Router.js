import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import Books from './Books';
import BookDetail from './BookDetail';
import Handouts from './Handouts';
import About from './About';
import SignIn from './SignIn';

const Router=() =>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/Books" component={Books}/>
        <Route path="/Book/:id" component={BookDetail}/>
        <Route path="/Handouts" component ={Handouts}/>
        <Route path="/About" component ={About}/>
        <Route path="/SignIn" component ={SignIn}/>
    </Switch>
    </BrowserRouter>
); 
export default Router;