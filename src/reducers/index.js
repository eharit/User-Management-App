import { combineReducers } from 'redux';

import appReducer from './app_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer
});

export default rootReducer;
