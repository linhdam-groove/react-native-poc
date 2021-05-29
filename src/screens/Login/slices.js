import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as loginApis from './apis';

const loginSliceName = 'login';

const initialState = {
  isLoading: false,
  error: null,
  userInfo: null,
  firebase: false,
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
    loginSuccess: (state, action) => {
      const { firebase, ...data } = action.payload;

      return {
        ...state,
        isLoading: false,
        userInfo: data,
        firebase,
      };
    },
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

        const { payload } = action;
        const { data } = yield call(loginApis.fetchUserInfo);

        let userInfo = {};

        if (data) {
          userInfo = data.find(
            item =>
              item.username === payload.username &&
              item.password === payload.password,
          );
        }

        const { password, ...dataMapped } = userInfo;

        yield put(
          reducerActions.loginSuccess({ firebase: false, ...dataMapped }),
        );
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
