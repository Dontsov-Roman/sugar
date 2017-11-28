import { combineReducers } from 'redux';
import app from './app';
import prices from './prices';

export default combineReducers({
    app,
    prices
});
