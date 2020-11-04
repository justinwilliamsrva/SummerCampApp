import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import Login from './Login';
import PrivateRoute from "./PrivateRoute"


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/create" component={Create} />
                <Route exact path="/post/:slug" component={SinglePost} />
                <PrivateRoute exact path="/post/update/:slug" component={UpdatePost}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
