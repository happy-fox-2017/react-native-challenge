import { combineReducers } from 'redux';
import { people } from './people';
import { person } from './person';
import { navReducer } from './nav';

const rootReducer = combineReducers(
  {
    people,
    person,
    nav: navReducer,
  },
);

export default rootReducer;
