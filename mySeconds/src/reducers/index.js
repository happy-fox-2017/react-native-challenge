import { combineReducers } from 'redux'

import answerReducer from './answerReducer'
import navReducer from './navReducer'

export default combineReducers({
  answer: answerReducer,
  nav: navReducer
})
