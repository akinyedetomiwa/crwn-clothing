// actual code that combines all our other codes together :all the reducers goes into the root reducer
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});
