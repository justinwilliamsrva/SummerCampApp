import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./Components/Messages/App";
import Create from "./Components/Messages/Create";

import UpdatePost from "./Components/Messages/UpdatePost";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Supplies from "./Components/Supplies/Supplies";
import UpdateSupplies from "./Components/Supplies/UpdateSupplies";
import CreateSupplies from "./Components/Supplies/CreateSupplies";
import Campers from "./Components/Campers/Campers";
// import SingleCamper from "./Components/Campers/SingleCampers";
// import UpdateCamper from "./Components/Campers/UpdateCampers";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Message Routes */}
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/create" component={Create} />
                <PrivateRoute exact path="/post/update/:slug" component={UpdatePost} />
                {/* Supply Routes */}
                <Route exact path="/equiptment" component={Supplies} />
                <Route exact path="/equiptment/update/:slug" component={UpdateSupplies} />
                <PrivateRoute exact path="/equiptment/create" component={CreateSupplies} />
                {/* Camper Routes */}
                <Route exact path="/campers" component={Campers} />
                {/* <Route exact path="/camper/:slug" component={SingleCamper} /> */}
                {/* <Route exact path="/camper/update/:slug" component={UpdateCamper} /> */}

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

{
    /* <Route exact path="/post/:slug" component={SinglePost} /> */
}
