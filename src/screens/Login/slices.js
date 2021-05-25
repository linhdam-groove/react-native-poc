import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put } from 'redux-saga/effects';

const loginSliceName = 'login';

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
};

export const loginSlice = createSlice({
  name: loginSliceName,
  initialState,
  reducers: {
    fetchUserInfo: (state, action) => ({
      ...state,
      isLoading: true,
      userInfo: action.payload,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isLoading: false,
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
    login: function* () {
      try {
        console.log('loginnnnnnnnnnnjnnnnnnn');
        yield put(
          reducerActions.loginSuccess({
            name: 'Linh Dam',
            email: 'linhdam@groove',
          }),
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
