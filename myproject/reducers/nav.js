import { AppNavigator } from '../navigators/AppNavigator';

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
