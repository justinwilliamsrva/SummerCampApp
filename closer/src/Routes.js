import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App';
import Create from "./Create"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/create" component={Create}/>
            </Switch>
        </BrowserRouter>
    );
};


export default Routes;