import React, {Component} from 'react';

import {HomePage} from "./pages/Home";
import {LoginPage} from "./pages/Login";
import {NotFound} from "./pages/NotFound";

import {Switch, HashRouter as Router, Redirect} from 'react-router-dom';
import * as history from 'history';
import DynamicRouting from './components/DynamicRouting';

class Routes extends Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <DynamicRouting
                        path={'/'}
                        component={<HomePage/>}
                    />
                    <DynamicRouting
                        path={'/login'}
                        component={<LoginPage/>}
                    />
                    <DynamicRouting
                        path={'/404'}
                        component={<NotFound/>}
                    />
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
