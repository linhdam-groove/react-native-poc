import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as loginApis from './apis';

const loginSliceName = 'login';

const initialState = {
  isLoading: false,
  error: null,
  userInfo: null,
};

export const loginSlice = createSlice({
  name: loginSliceName,
  initialState,
  reducers: {
    fetchUserInfo: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    fetchUserInfoProcessing: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    fetchUserInfoSuccess: (state, action) => ({
      ...state,
      userInfo: action.payload,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      userInfo: action.payload,
    }),
    loginFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    resetReducer: () => initialState,
  },
});

const { actions: reducerActions, reducer: loginReducer } = loginSlice;

const loginSliceSaga = createSliceSaga({
  name: loginSliceName,
  caseSagas: {
    login: function* (action) {
      try {
        yield put(reducerActions.fetchUserInfoProcessing());
        yield put(
          reducerActions.fetchUserInfo({
            name: 'Linh Dam',
            email: 'linhdam@groove',
          }),
        );
        const { payload } = action;

        const { data } = yield call(loginApis.fetchUserInfo);

        let userInfo;

        if (data) {
          userInfo = data.filter(
            item =>
              item.username === payload.username &&
              item.password === payload.password,
          );
        }

        yield put(reducerActions.loginSuccess(userInfo));
      } catch (error) {
        yield put(reducerActions.loginFailure(error));
      }
    },
  },
  sagaType: SagaType.TakeLatest,
});

const { actions: sagaActions, saga: loginSaga } = loginSliceSaga;
const loginActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  loginSliceName,
  loginSliceSaga,
  loginReducer,
  loginActions,
  loginSaga,
};
