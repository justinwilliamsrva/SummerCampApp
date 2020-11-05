import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './Components/Messages/App';
import Create from './Components/Messages/Create';

import UpdatePost from './Components/Messages/UpdatePost';
import Login from './Login';
import PrivateRoute from "./PrivateRoute"
import Supplies from "./Components/Supplies/Supplies"
import UpdateSupplies from "./Components/Supplies/UpdateSupplies"
import CreateSupplies from "./Components/Supplies/CreateSupplies"



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/create" component={Create} />
                {/* <Route exact path="/post/:slug" component={SinglePost} /> */}
                <Route exact path="/equiptment" component={Supplies} />
                <Route exact path="/equiptment/update/:slug" component={UpdateSupplies} />
                <PrivateRoute exact path="/equiptment/create" component={CreateSupplies} />
                <PrivateRoute exact path="/post/update/:slug" component={UpdatePost}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
