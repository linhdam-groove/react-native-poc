import apiClient from 'apis/apiClient';
import { LOGIN_URL, USER_INFO_URL } from 'constants/apiUrl';

export const login = params =>
  apiClient
    .post(LOGIN_URL, params)
    .then(res => res)
    .catch(function (err) {
      throw err;
    });

export const fetchUserInfo = params =>
  apiClient
    .post(USER_INFO_URL, params)
    .then(res => res)
    .catch(function (err) {
      throw err;
    });
