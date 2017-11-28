import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import store from './store';

render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('root')
);
