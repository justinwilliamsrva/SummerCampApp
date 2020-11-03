import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"/>
            </Switch>
        </BrowserRouter>
    );
};
