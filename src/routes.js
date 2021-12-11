import React from 'react';
import ReactDOM from "react-dom";

import { BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import Login from './login';
import Home from './home';
import Adduser from './adduser';
const Routes = () => (
  <BrowserRouter>
    <div className="container">
    <Switch>
     <Route exact path="/" component={Login} /> 
      <Route exact path="/home" component={Home} /> 
       <Route exact path="/adduser" component={Adduser} />  
     </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;