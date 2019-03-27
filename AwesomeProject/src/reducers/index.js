
import { combineReducers } from 'redux-immutable';
import nav from './nav';
import user from './user';

const appReducer = combineReducers({
    nav,
    user,
});

export default appReducer;
