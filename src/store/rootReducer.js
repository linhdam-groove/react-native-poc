import { combineReducers } from 'redux';

import { loginReducer, loginSliceName } from 'screens/Login/slices';

const createReducer = combineReducers({
  [loginSliceName]: loginReducer,
});

export default createReducer;
