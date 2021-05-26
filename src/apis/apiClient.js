import axios from 'axios';

import { BASE_API_URL } from 'apis/apiClient';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default apiClient;
