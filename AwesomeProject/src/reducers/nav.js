
import { fromJS } from 'immutable';
import { AppNavigator } from '../appNavigator';

const initialState = fromJS(AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Guide')));

const navReducer = (state = initialState, action) => state.merge(AppNavigator.router.getStateForAction(action, state.toJS()));

export default navReducer;
