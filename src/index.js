import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import rootReducer from './stores/rootReducer';
import {settings} from './config/settings';
import { ThemeProvider } from '@material-ui/core';
import { errorsMiddleware } from './middlewares/errorsMiddleware';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(reduxThunk, errorsMiddleware())
);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={settings.theme}>
            <Provider store={store}>
                <Router dispatch={store.dispatch} />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
