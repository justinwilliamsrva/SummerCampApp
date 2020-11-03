import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/post/:slug" component={SinglePost}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
