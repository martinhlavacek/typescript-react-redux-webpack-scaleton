/// <reference path="./references.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import ConnectedIntlProvider from './appComponents/ConnectedIntlProvider';
import { composeWithDevTools } from 'redux-devtools-extension';
import workflows from './workflows/workflows';

// Setup locale
import { addLocaleData } from 'react-intl';
const en = require('./../node_modules/react-intl/locale-data/en.js');
const cs = require('./../node_modules/react-intl/locale-data/cs.js');

addLocaleData([...en, ...cs]);

// Component for routing
import Homepage from './pages/Homepage/Homepage';

// Redux and Router
const history = createHistory();
const store = createStore(
    combineReducers({...workflows, router: routerReducer}),
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

// Base css
import './App.scss';

// Mount
ReactDOM.render(
    <Provider store={store}>
        <ConnectedIntlProvider>
            <ConnectedRouter history={history}>
                <Route path="/" component={Homepage}/>
            </ConnectedRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root'));
