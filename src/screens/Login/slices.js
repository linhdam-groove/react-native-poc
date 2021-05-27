import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';

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
    authLogin: function* (action) {
      yield put(reducerActions.fetchUserInfoProcessing());

      const { username, password } = action.payload;
      auth()
        .signInWithEmailAndPassword(username, password)
        .then(res => {
          console.log('🚀 ~ file: slices.js ~ line 58 ~ res', res);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    },
    login: function* (action) {
      try {
        yield put(reducerActions.fetchUserInfoProcessing());

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
