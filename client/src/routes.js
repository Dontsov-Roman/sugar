import React from "react";
import { Route } from "react-router-dom";
import address from 'addresses';
import App from './containers/App';
import About from './containers/About';
import Home from './containers/Home';
import Prices from './containers/Prices';
import Tabs from './containers/Tabs';

export default (
    <App>
        <Tabs />
        <Route exact path={address.home} component={Home}/>
        <Route path={address.about} component={About}/>
        <Route path={address.prices} component={Prices}/>
    </App>
)
