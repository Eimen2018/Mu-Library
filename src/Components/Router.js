import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import Books from './Books';

const Router=() =>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/Books" component={Books}/>
    </Switch>
    </BrowserRouter>
); 
export default Router;