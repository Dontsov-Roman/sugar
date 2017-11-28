import React from "react";
import { Route } from "react-router-dom";
import address from './addresses.json';
import About from './containers/About';
import Home from './containers/Home';

export default (
    <div>
        <Route exact path={address.home} component={Home}/>
        <Route path={address.about} component={About}/>
    </div>
)
