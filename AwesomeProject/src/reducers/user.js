
import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import action from '../actions/user';

const initialState = fromJS({
    token: null,
});

export default createReducer({
    [action.setToken]: (state, token) => state.set('token', token),
}, initialState);
