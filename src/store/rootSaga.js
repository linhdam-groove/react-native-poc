import { all } from 'redux-saga/effects';
import { loginSaga } from 'screens/Login/slices';

const rootSaga = function* () {
  yield all([loginSaga()]);
};
export default rootSaga;
