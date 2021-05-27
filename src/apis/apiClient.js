import axios from 'axios';

import { BASE_API_URL } from 'constants/appConfig';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: BASE_API_URL,
  },
});

export default apiClient;
