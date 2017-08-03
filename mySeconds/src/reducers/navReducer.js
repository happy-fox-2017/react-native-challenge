import AppNavigator from '../config/router'

const initState = AppNavigator.router.getStateForAction(AppNavigator.router/getActionForPathAndParams('Answer'))

const navReducer = (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // simply return the original 'state' if 'nextState' is null or undefined
  return nextState || state
}

export default navReducer
