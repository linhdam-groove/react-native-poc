import { combineReducers } from 'redux';

const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    ...injectedReducers,
  });
};

export default createReducer;
