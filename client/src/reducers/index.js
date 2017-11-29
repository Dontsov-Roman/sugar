import { combineReducers } from 'redux';
import app from './app';
import prices from './prices';
import adaptive from './adaptive';

export default combineReducers({
    app,
    prices,
    adaptive
});
