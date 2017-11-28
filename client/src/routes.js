import React from "react";
import { Route } from "react-router-dom";
import address from './addresses.json';
import About from './containers/About';

export default (
    <div>
        <Route path={address.index} exact match>
            <div>Hello world</div>
        </Route>
        <Route path={address.about} component={About}/>
    </div>
)
