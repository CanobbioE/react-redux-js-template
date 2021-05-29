import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Routes from './constants/Routes';
import Home from './view/containers/Home';
import './index.css';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <div >
                    <Route exact path={Routes.home} component={Home} dispatch={this.props.dispatch}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;