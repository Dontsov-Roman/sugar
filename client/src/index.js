import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import store from './store';

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                {routes}
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root')
);
