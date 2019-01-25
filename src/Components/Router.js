import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import Books from './Books';
import BookDetail from './BookDetail';
import Handouts from './Handouts';
import About from './About';

const Router=() =>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/Books" component={Books}/>
        <Route path="/Book/:id" component={BookDetail}/>
        <Route path="/Handouts" component ={Handouts}/>
        <Route path="/About" component ={About}/>
    </Switch>
    </BrowserRouter>
); 
export default Router;