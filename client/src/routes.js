import React from "react";
import { Route } from "react-router";
import address from './addresses.json';

export default (
    <div>
        <Route path={address.index} exact>
            Hello world
        </Route>
    </div>
)
