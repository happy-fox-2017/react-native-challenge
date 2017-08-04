import { AppNavigator } from '../navigators/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

export const navReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
