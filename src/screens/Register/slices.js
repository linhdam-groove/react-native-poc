import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

const registerSliceName = 'register';

const initialState = {
  isLoading: false,
  error: null,
};
